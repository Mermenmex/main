/* Appel API récupère le titre de la dernière video publiée */
import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";

const LatestTitle = (props) => {

    const [latestTitle, setLatestTitle] = useState();


    useEffect(() => {
        const { api_key, channel_id } = config;
        const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=10&order=date&type=video&key=${api_key}`
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = data.items[props.num].snippet.title;
                setLatestTitle(count);
            });

    }, []);


    return <Fragment>{latestTitle}</Fragment>;


}

export default LatestTitle;