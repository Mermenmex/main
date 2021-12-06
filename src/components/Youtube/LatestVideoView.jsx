/* Appel API récupère le nombre de vue d'une vidéo */

import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";


const LatestVideoView = () => {

    const [viewCount, setViewCount] = useState();

    useEffect(() => {
        const { api_key, video_id } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${api_key}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.viewCount).format('0,0');
                setViewCount(count);
            });

    }, []);

    return <Fragment>{viewCount}</Fragment>;

}

export default LatestVideoView;


