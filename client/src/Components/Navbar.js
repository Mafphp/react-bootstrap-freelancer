import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Portfolio from '../Pages/Portfolio/Portfolio';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Profile from '../Pages/Profile/Profile';
import Cars from '../Pages/Cars/Cars';
import { authService } from '../Services/Auth';
  
function Navbar() {
    const [isAuthenticate, setAuthenticate] = useState(false);
    authService.getToken().subscribe(token => {
        console.log({token});
        if (token) {
            setAuthenticate(true);
        } else {
            setAuthenticate(false);
        }
    });
    const logout = () => {
        localStorage.setItem('token', '');
        authService.clearToken();
    }
    return <React.Fragment>
        <Router>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/cars">Rental Vehicles</Link>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {isAuthenticate ? (
                                <React.Fragment>
                                    {/* <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/portfolio">Portfolio</Link></li> */}
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/configuration">Configuration</Link></li>
                                    {/* <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/about">About</Link></li> */}
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/profile">Profile</Link></li>
                                    {/* <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/contact">Contact</Link></li> */}
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={logout}>Logout</Link></li>
                                </React.Fragment>

                            ) : (
                                <React.Fragment>
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/login">Login</Link></li>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="masthead">
                <Switch>
                    <Route path="/cars" component={Cars} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
        </div>
        {isAuthenticate ? <Redirect to="/profile" /> : <Redirect to="/login" />}
        </Router>
    </React.Fragment>
}

export default Navbar;
