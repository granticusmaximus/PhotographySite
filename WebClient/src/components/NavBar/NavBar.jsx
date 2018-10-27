import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../../App.js"
import '../../assets/css/App.css';
import Login from '../../pages/Login/login.jsx';
import Registration from '../../pages/Registration/registration.jsx';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Registration} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default NavBar;
