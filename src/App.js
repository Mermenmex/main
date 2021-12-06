/* Appel des différentes pages et éléments du dashboard */

import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./components/home/Home";
import UserList from "./components/userList/UserList";
import NewUser from "./components/newUser/NewUser"
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import User from "./components/user/User";
import { Switch } from "react-router-dom";


import browserHistory from "react-router-dom"

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Routes>
          <Route exact path="/"
            element={<Home />} />

          <Route path="/supersubscribers" element={<UserList />} />

          <Route path="/supersubscribers/:userId" element={<User />} />
          <Route path="/newsupersubscribers" element={<NewUser />} />

        </Routes>
      </div>
    </div>
  );
}
export default App;
