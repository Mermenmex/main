/* Fonction récupèreles données d'un supersubscriber */

import {

    MailOutline,
    PermIdentity

} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newsupersubscribers">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">


                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Username</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">audreeeey</span>
                        </div>


                        <span className="userShowTitle">Contact Details</span>


                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Audrey.C@gmail.com</span>
                        </div>


                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="your username"
                                    className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="your email"
                                    className="userUpdateInput"
                                />
                            </div>

                        </div>
                        <div className="userUpdateRight">

                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
