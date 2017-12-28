import React, {Component} from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';

export default class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Ashwani'] };
        this.renderGreetings = this.renderGreetings.bind(this);
    }
    renderGreetings() {
        // "map" each item in array to special anonymous function which returns HelloWorld
        // component. The "key" is here because React wants to know which element to modify/
        // remove when one of the elements in your list changes, it has to be able to
        // uniquely identify which element it is, so here we are just specifying key as name.
        return this.state.greetings.map(name => (
            <HelloWorld key={name} name={name} />
        ));
    }
    render() {
        return (
            <div className="HelloWorldList">
                {this.renderGreetings()}
            </div>
        );
    }
}