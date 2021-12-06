/* Fonction récupère les super subscribers et les appelle dans une data grid */


import "./userList.css";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";
import React, { useState, useEffect, Fragment, componentDidMount, render } from "react"

import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "./dummyData";
import { Link, Outlet } from "react-router-dom";
import Axios from 'axios';






export default function UserList() {

    const [data, setData] = useState([]);
    const [deletedRows, setDeletedRows] = useState([]);

    const url = 'http://localhost:3000/api/stuff';

    useEffect(() => {
        const Axios = require('axios').default;

        Axios.get(`${url}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                response.data.forEach(user => {

                });
            });
    }, []);



    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        Axios.delete(`http://localhost:3000/api/stuff/${id}`)
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/supersubscribers/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];


    return (

        <Fragment>
            <div style={{ height: 900, width: "100%" }}>
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    getRowId={(row) => row._id}
                >
                </DataGrid>
                <Outlet />

            </div>
        </Fragment>
    );


}




/*
export default function UserList() {

    const [data, setData] = useState([]);

    const url = 'http://localhost:3000/api/stuff';

    useEffect(() => {
        const Axios = require('axios').default;

        Axios.get(`${url}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                response.data.forEach(user => {

                });
            });
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/supersubscribers/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];


    return (

        <Fragment>
            <div style={{ height: 900, width: "100%" }}>
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    getRowId={(row) => row._id}
                >
                </DataGrid>
                <Outlet />

            </div>
        </Fragment>
    );


}*/







