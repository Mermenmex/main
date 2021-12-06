/* Appel API récupère le thumbnail de la dernière (ou n) video publiée */

import React, { useState, useEffect } from "react"
import config from "./config.js";


const LatestVideoThumbnail = (props) => {

    var [Thumbnail, setThumbnail] = useState();

    useEffect(() => {
        const { api_key, channel_id } = config;
        const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=10&order=date&type=video&key=${api_key}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {

                const count = data.items[props.num].snippet.thumbnails.default.url;
                setThumbnail(count);


            });

    });

    return <img src={Thumbnail}></img>
}

export default LatestVideoThumbnail;