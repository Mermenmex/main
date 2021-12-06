/* Appel API récupère l'id de la dernière (ou n) video publiée */

import React, { useState, useEffect, Fragment, componentDidMount, render } from "react"
import queryString from 'query-string';
import { renderToString } from 'react-dom/server'
import config from "./config.js";
import numeral from "numeral";


export default class LatestVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {

                data: String
            },
            view: {
                data2: []
            },
            url: {
                data3: String
            }
        };
    }

    seturl = function (inp) {
        this.state.url.data3 = inp;


    }


    geturl = function () {
        return (this.state.url.data3);

    }
    componentDidMount() {
        //retourner une promesse : récuperer les données depuis l'API
        const { api_key, channel_id } = config;
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=10&order=date&type=video&key=${api_key}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ post: result.items[this.props.id].id.videoId })
                console.log("tes")
                console.log(result.items[this.props.id].id.videoId)
                console.log(this.state.post)
                this.seturl(result.items[this.props.id].id.videoId)
                console.log(this.geturl())

            })

        const myObject = (this.geturl());
        console.log(1000, myObject);
        //retourner une promesse : récuperer les données depuis l'API


        const apicall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.state.post}&key=${api_key}`;
        // console.log(apicall);
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.state.post.toString()}&key=${api_key}`)
            .then((response2) => {
                return response2.json()
            })
            .then((result) => {
                this.setState({ view: result.data2.items2[0].statistics.viewCount })
                console.log("tes1")
                console.log(result.data2.items2[0].statistics.viewCount)
                console.log("tes2")
                console.log(this.state.view)
                console.log("tes3")
            })




    }


    getTotal = () => {
        return (numeral(this.state.view).format('0,0'))
    }

    render() {
        return (

            <div className="Wrapper"><div>Total {this.getTotal()}</div></div>
        )
    }

}


