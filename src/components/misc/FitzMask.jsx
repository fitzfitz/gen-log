import React, { Component } from 'react';
import './FitzMask.scss';
import FitzLoad from './FitzLoad';

export default class FitzMask extends Component {
    render() {
        return (
            <div className="fitz-mask">
                <FitzLoad color="2196F3" className="la-md" />
            </div>
        )
    }
}
