
import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import CreateVehicle from "./components/create-vehicle.component.js";
import EditVehicle from "./components/edit-vehicle.component.js";
import VehicleList from "./components/vehicle-list.component.js";



class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <Link to={'/'} className="navbar-brand" href="#">react vehicle CRUD</Link>

                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">

                                    <Link to={'/'} className="nav-link">Create</Link>
                                    <Link to={'/edit-vehicle/:id'} className="nav-link" >Edit</Link>
                                    <Link to={'/vehicle-list'} className="nav-link" >List</Link>

                                </div>
                            </div>
                        </div>
                    </nav>
                    <br/>

                    <h2>Welcome</h2>
                    <Switch>
                        <Route exact path="/" component={CreateVehicle} />
                        <Route exact path="/create-vehicle" component={CreateVehicle} />
                        <Route exact path="/edit-vehicle/:id" component={EditVehicle} />
                        <Route exact path="/vehicle-list" component={VehicleList} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;