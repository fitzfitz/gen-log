import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginBrand from './LoginBrand';
import LoginOutlet from './LoginOutlet';
import FitzMask from '../misc/FitzMask';

class LoginChooseWrap extends Component {
    render() {
        const { auth } = this.props;
        const appName = document.getElementById('root').dataset.title;
        return (
            <div className="on-choose-log row">
                <div className="bad-title"> {appName} </div>
                {!auth.isOutlet ? <LoginBrand /> : <LoginOutlet />}
                {auth.isLoad && <FitzMask />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LoginChooseWrap)