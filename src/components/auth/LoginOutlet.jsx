import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chooseBrand } from '../../store/actions/authActions';
import M from 'materialize-css';

class LoginOutlet extends Component {
    constructor(props) {
        super(props);
        this.chOutlet = React.createRef();
    }
    handleChange = (e) => {
        this.props.chooseBrand({outlet: e.target.value})
    }
    componentDidMount() {
        M.FormSelect.init(this.chOutlet.current);
    }
    render() {
        const { auth } = this.props;
        return (
            <div className="input-field col s12">
                <select onChange={this.handleChange} ref={this.chOutlet} defaultValue="">
                    <option value="" disabled>Select outlet</option>
                    {auth.data.map((val, key) => <option key={key} value={val.value}>{val.display}</option>)}
                </select>
                <label>Choose Outlet</label>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    chooseBrand: (val) => new Promise((resolve, reject) => {
        dispatch(chooseBrand(val))
        resolve();
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginOutlet)