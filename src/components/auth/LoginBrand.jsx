import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chooseBrand } from '../../store/actions/authActions';
import M from 'materialize-css';

class LoginBrand extends Component {
    constructor(props) {
        super(props);
        this.chBrand = React.createRef();
    }
    handleChange = (e) => {
        this.props.chooseBrand({brand: e.target.value})
    }
    componentDidMount() {
        M.FormSelect.init(this.chBrand.current);
    }
    render() {
        const { auth } = this.props;
        return (
            <div onChange={this.handleChange} className="input-field col s12">
                <select ref={this.chBrand} defaultValue="">
                    <option value="" disabled>Select brand</option>
                    {auth.data.map((val, key) => <option key={key} value={val.value}>{val.display}</option>)}
                </select>
                <label>Choose Brand</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginBrand)