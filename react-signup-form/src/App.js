import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './components/Modal';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        console.log('Mounted');
        this.setState({ mounted: true });
    }
    handleSubmit(e) {
        this.setState({ mounted: false });
        e.preventDefault();
    }
    render() {
        var child;
        if (this.state.mounted) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }

        return (
            <div className="App">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {child}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}