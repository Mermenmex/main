/* Appel API récupère le titre de la dernière (ou n) video publiée */

import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";
import { renderToString } from 'react-dom/server'

const VideoTitle = (props) => {

    const [videoTitle, setVideoTitle] = useState();

    useEffect(() => {
        const { api_key } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.id}&key=${api_key}`
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = data.items[0].snippet.localized.title;
                setVideoTitle(count);
            });

    }, []);

    return <Fragment>{videoTitle}</Fragment>;

};

export default VideoTitle;