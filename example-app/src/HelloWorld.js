import React, { Component } from 'react';
import './HelloWorld.css';

/**
 * props are properties inside of React component that are passed in from somewhere
 * generally from parent.
 * @param {props} param0 
 */
/*const HelloWorld = (props) => {
    return (<div className="HelloWorld">Hello {props.name}</div>);
};
export default HelloWorld;*/

// HelloWorld component extends functionality of Component Class 
class HelloWorld extends Component {
    constructor(props) {
        // calls parent's constructor using super(props).
        super(props);
        // set property on class called "state"
        this.state = { greeting: 'Hello' };
        // Tells JavaScript, any time you see a reference to "this" inside of the frenchify
        // function, please refer to ME.
        this.frenchify = this.frenchify.bind(this);
    }
    frenchify() {
        // setState only changes keys that are specified inside of state, it doesn't replace
        // the entire state.
        this.setState({ greeting: 'Bonjour' });
    }
    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br />
                <button onClick={this.frenchify}>Frenchify!</button>
            </div>
        );
    }
}
export default HelloWorld;