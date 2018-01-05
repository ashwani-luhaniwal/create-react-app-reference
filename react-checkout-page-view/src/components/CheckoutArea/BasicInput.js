import React, { Component } from 'react';

/**
 * This component renders any type of input field
 */
export default class BasicInput extends Component {
    render() {
        return (
            <div className="BasicInput">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input id={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
            </div>
        );
    }
}