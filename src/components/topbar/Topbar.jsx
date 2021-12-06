/* Layout barre de navigation */

import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
import {

    PermIdentity,

} from "@material-ui/icons";
import "./topbar.css";


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">

                    <Link to="/" className="home">
                        <span className="logo">Youtube Dashboard</span>
                    </Link>

                </div>

                <div className="topRight">
                    <div className="sidebarMenu">

                        <li className="topbarListItem">
                            <Link to="/newsupersubscribers">
                                <button className="userAddButton">Create</button>
                            </Link>
                            <Link to="supersubscribers" className="link" >

                                <PermIdentity className="topbarIcon" />
                                Super Subscribers

                            </Link>

                        </li>


                    </div>
                </div>
            </div>
        </div>
    );
}

