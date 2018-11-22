import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import FitzLoad from '../misc/FitzLoad';
// import Logo from '../../assets/Logo.png';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { auth } = this.props;
        const appName = document.getElementById('root').dataset.title;
        return (
            <div className="MainLoginForm flex-col">
                            
                <div className="form-wrap flex-col flex-3 justify-content-center align-items-center">

                    {/* <img style={{ maxWidth: 200 }} src={Logo} alt="Genesys" /> */}
                    <div className="center-align flex-col full-width">
                        <div className="bad-title"> {appName} </div>
                        <form>
                            <div className="row">
                                <div className="input-field">
                                    <input id="username" type="text" className="validate" required onChange={this.handleChange} />
                                    <label htmlFor="username">Username</label>
                                    <span className="helper-text material-icons" data-error="add" data-success="check"></span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field">
                                    <input id="password" type="password" className="validate" required onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                    <span className="helper-text material-icons" data-error="add" data-success="check"></span>
                                </div>
                            </div>
                        </form>
                        {(auth.message !== '' || auth.message !== null) && <span className="error-message">{auth.message}</span>}
                        {auth.isLoad ? <FitzLoad color="2196F3" /> : <button onClick={this.handleSubmit} className="btn waves-effect waves-light blue full-width">Login</button>}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    signIn: (creds) => dispatch(signIn(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)