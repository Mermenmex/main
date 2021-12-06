/* Appel du dashboard */

import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import Home from "./components/home/Home";


const rootElement = document.getElementById("root");


const container = (
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

ReactDOM.render(container, rootElement);