/* Appel widgets du haut */
import "./featuredInfo.css";
import SubCounter from '../Youtube/SubCounter';
import TotalViewCounter from "../Youtube/TotalViewCounter";

import NbrVideo from "../Youtube/NbrVideo"


import LatestVideo from "../Youtube/LatestVideos";


function Url() {
    return (
        <div >
            <LatestVideo num={4} />
        </div>
    );
}

export default function FeaturedInfo() {
    return (
        <div className="featured">

            <div className="featuredItem">
                <span className="featuredTitle">Subscriber Count</span>

                <div className="featuredContainer">
                    <span className="featuredI"><SubCounter /></span>
                    <span className="featuredIcons">subscribers
                    </span>
                </div>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Total View Count</span>
                <div className="featuredContainer">
                    <span className="featuredI"><TotalViewCounter /></span>
                    <span className="featuredIcons">
                        Views
                    </span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Video Count</span>
                <div className="featuredContainer">

                    <span className="featuredI"><NbrVideo /></span>
                    <span className="featuredIcons">
                        Videos
                    </span>

                </div>

            </div>


        </div>
    );
}

//id={`${Url.toString()}`}
//<span className="featuredMoney"><LatestVideo id={5} /></span>