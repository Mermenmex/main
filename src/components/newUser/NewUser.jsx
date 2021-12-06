/* Créerun super subscriber */

import "./newUser.css";
import React, { useState, useEffect, Fragment, componentDidMount, render } from "react"
import Axios from 'axios';

export default function NewUser() {
    const url = "http://localhost:3000/api/stuff"
    const [data, setData] = useState({
        username: "",
        email: "",
        gender: ""
    })

    function submit(event) {
        event.preventDefault();
        Axios.post(url, {
            username: data.username,
            email: data.email,
            gender: data.gender
        })
            .then(res => {
                console.log(res.data)

            })

    }

    function handle(event) {
        const newdata = { ...data }
        newdata[event.target.id] = event.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form onSubmit={(event) => submit(event)} className="newUserForm" >

                <div className="newUserItem">
                    <label>Username</label>
                    <input onChange={(event) => handle(event)} id="username"
                        value={data.username} type="text" placeholder="john" />
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" onChange={(event) => handle(event)} id="email"
                        value={data.email} placeholder="john@gmail.com" />
                </div>

                <div className="newUserItem">
                    <label>Gender</label>
                    <input type="text" onChange={(event) => handle(event)} id="gender"
                        value={data.gender} placeholder="your gender" />
                </div>


                <button className="newUserButton">Create</button>

            </form>
        </div>
    );
}


/*
/*c*//** */

