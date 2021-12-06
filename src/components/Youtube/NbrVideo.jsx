/* Appel API récupère le nombre video publiées de la cahine */

import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";


const VideoCount = () => {

    const [videoCount, setVideoCount] = useState();

    useEffect(() => {
        const { api_key, channel_id } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral
                    (data.items[0].statistics.videoCount).format('0,0');
                setVideoCount(count);
            });

    }, []);

    return <Fragment>{videoCount}</Fragment>;

}

export default VideoCount