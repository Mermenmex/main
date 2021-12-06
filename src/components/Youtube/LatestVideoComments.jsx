/* Appel API récupère le nombre de commentaires de la dernière video publiée */

import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";

const LatestVideoComment = () => {

    const [commentCount, setCommentCount] = useState();

    useEffect(() => {
        const { api_key, video_id } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${api_key}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.commentCount).format('0,0');
                setCommentCount(count);
            });

    });

    return <Fragment>{commentCount}</Fragment>
};

export default LatestVideoComment;