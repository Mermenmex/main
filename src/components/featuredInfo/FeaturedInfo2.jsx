/* Appel widgets du bas */


import "./featuredInfo.css";

import LatestVideoThumbnail from "../Youtube/LatestVideoThumbnail";
import LatestVideo from "../Youtube/LatestVideos";
import LatestTitle from "../Youtube/LatestTitle";
import LatestVideoView from "../Youtube/LatestVideoView";
import LatestVideoLike from "../Youtube/LatestVideoLike";
import LatestVideoDislike from "../Youtube/LatestVideoDislike";
import LatestVideoComment from "../Youtube/LatestVideoComments";



import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Ratio from "../Youtube/Ratio";


function Url() {
    return (
        <div >
            <LatestVideo num={4} />
        </div>
    );
}

export default function FeaturedInfo2() {
    return (
        <div className="featured">



            <div className="featuredItem">
                <span className="featuredTitle">Video Statistics</span>
                <div className="featuredContainer">
                    <div className="featuredI"> <LatestVideoThumbnail num={0} /></div>
                    <div className="featuredIcons">
                        <ThumbUpIcon className="featuredIcon negative" /> <LatestVideoLike />
                        <div className="icon2">
                            <ThumbDownIcon className="featuredIcon negative" /> <LatestVideoDislike />
                        </div>
                        <div className="icon2">
                            <ChatBubbleIcon className="featuredIcon negative" /> <LatestVideoComment />
                        </div>

                    </div>
                </div>
                <span className="featuredSub"><LatestTitle num={0} /> </span>
                <span className="featuredSub"><LatestVideoView /> views</span>
            </div>



            <div className="featuredItem">
                <input type="radio" name="position" checked />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <main id="carousel">
                    <div class="item">
                        <LatestVideoThumbnail num={0} />
                    </div>
                    <div class="item">
                        <LatestVideoThumbnail num={1} />
                    </div>
                    <div class="item">
                        <LatestVideoThumbnail num={2} />
                    </div>
                    <div class="item">
                        <LatestVideoThumbnail num={3} />
                    </div>
                    <div class="item">
                        <LatestVideoThumbnail num={4} />
                    </div>
                </main>
            </div>




        </div>
    );
}
