import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import { Redirect } from 'react-router-dom';
import { authService } from '../../Services/Auth';

function Login()  {
    authService.getToken().subscribe(token => {
        if (token) {
            setLoggedIn(true)
        }else {
            setLoggedIn(false)
        }
    });
    const [username, setUsername] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [isLoggedIn, setLoggedIn] = useState('') ;
    const loginButtonClicked = async () => {
        try {
            const result = await axios.post('http://localhost:3002/login', {
                username,
                password
            });
            if (result.data && result.data.status === 200 && result.data.token) {
                localStorage.setItem('token', result.data.token);
                authService.setToken(result.data.token);
            }
        } catch (err) {
            console.error('an error occurred', err);
            alert(err.message);
        }
    }
    

    return <React.Fragment>
        <section className="page-section" id="contact">
            <div className="container">
                {/* <!--Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Login</h2>
                {/* <!--Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!--Contact Section Form--> */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* <!--To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                        <form id="contactForm" name="sentMessage" noValidate="noValidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Username</label>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="name" type="text" placeholder="Username" required="required" data-validation-required-message="Please enter your username" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your password." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="form-group"><button className="btn btn-primary btn-block btn-xl" id="sendMessageButton" onClick={loginButtonClicked}>Login</button></div>
                    </div>
                </div>
            </div>
        </section>
        {isLoggedIn ? <Redirect to='/profile'/> : ''}
        
    </React.Fragment>
}
export default Login;