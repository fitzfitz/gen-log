import React, { Component } from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import LogoWhite from '../../assets/LogoWh.png';
// import LogoCmpWh from '../../assets/genesys-logo-white.png';

import LoginForm from './LoginForm';
import LoginChooseWrap from './LoginChooseWrap';

class Login extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div id="MainLogin">
                <div className="main-login-wrap flex-row">
                    <div className="cd-single-point">
                        <a className="cd-img-replace"href="http://www.agapesoftware.co.id" rel="noopener noreferrer" target="_blank">&nbsp;</a>
                    </div>
                    <div className={`MainLoginWelcome flex-row justify-content-center align-items-center ${auth.success ? '' : 'logged'}`}>
                        <Particles
                            className="animate-fitz"
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 50
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }} 
                        />
                        <div className="login-welcome-left align-items-center">
                            <img src={LogoWhite} alt="Genesys" />
                            <a className="link-to-genesys" href="http://www.agapesoftware.co.id" rel="noopener noreferrer" target="_blank">Find Out More</a>
                        </div>
                        <div className={`login-welcome-right ${!auth.success ? "align-items-start": "align-items-center bg-white"}`}>
                            <img src="./assets/images-system.png" alt="Genesys" />
                        </div>
                        {/* <img width={60} src={LogoCmpWh} alt="Genesys" />
                        <h5 className="text-primary">Welcome to Genesys</h5>
                        <p className="text-primary">Generation Next application System</p> */}
                    </div>
                    {!auth.success ? <LoginForm /> : <LoginChooseWrap />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Login)