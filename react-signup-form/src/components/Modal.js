import React, { Component } from 'react';
import Input from './Input';

export default class Modal extends Component {
    render() {
        return (
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
                    <Input id="name" type="text" placeholder="Enter Fullname" />
                    <Input id="username" type="email" placeholder="Enter Email" />
                    <Input id="password" type="password" placeholder="Enter Password" />
                    <button>Log In <i className="fa fa-fw fa-chevron-right"></i></button>
                </form>
            </div>
        );
    }
}