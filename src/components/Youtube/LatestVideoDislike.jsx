/* Appel API récupère le nombre de dislike de la dernière video publiée */

import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";


const LatestVideoDislike = () => {

    const [dislikeCount, setDislikeCount] = useState();

    useEffect(() => {
        const { api_key, video_id } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${api_key}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.dislikeCount).format('0,0');
                setDislikeCount(count);
            });

    });

    return <Fragment>{dislikeCount}</Fragment>
};
export default LatestVideoDislike;