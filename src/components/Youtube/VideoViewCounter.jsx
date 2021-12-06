/* Appel API récupère le nosmbre de vue de la dernière (ou n) video publiée */

import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";


const VideoViewCounter = (props) => {

    const [viewCount, setViewCount] = useState();
    var vi = null;
    useEffect(() => {
        const { api_key } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.id}&key=${api_key}`
        fetch(apiCall)
            .then(result => { return result.json() })
            .then(data => {
                const count = numeral
                    (data.items[0].statistics.viewCount).format('0,0');
                setViewCount(count);
                vi = count;
            });

    }, []);

    const v = <Fragment>{viewCount}</Fragment>;

    return (<Fragment>  {viewCount}</Fragment>);

};
export default VideoViewCounter;
