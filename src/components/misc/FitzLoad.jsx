import React, { Component } from 'react'
import './FitzLoad.scss';

export default class FitzLoad extends Component {
    render() {
        return (
            <div style={{ background: `#${this.props.bg}`, color: `#${this.props.color}` }} className={`la-ball-clip-rotate-pulse la-sm ${this.props.className}`}>
                <div></div>
                <div></div>
            </div>
        )
    }
}