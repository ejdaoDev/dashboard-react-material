import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import Topbar from "./components/layouts/Topbar";
import Home from "./components/Home";
import CreateNewUser from "./components/security/CreateNewUser";
import EditUser from "./components/security/EditUser";

function App() {
  return (
    
      <div id="wrapper">
        <Router>
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-new-user" component={CreateNewUser}/>
                <Route path="/edit-user" component={EditUser} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
  );
}

export default App;
