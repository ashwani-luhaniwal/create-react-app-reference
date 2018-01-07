/**
 * What is immutability ?
 * -----------------------
 * When we use the term "immutability" (immutable) we mean an object or array that cannot be changed
 * once it is created. Arrays and objects are "mutable" - you can add values to the original array or
 * object. But we don't want to mutate our objects because it can cause consistency problems down the line.
 * 
 * In JavaScript, strings and numbers are immutable, once a string is created, it cannot be altered.
 * Similarly, a number itself cannot be changed (42 is always 42 and never 43). This is somewhat counter-
 * intuitive in that we append to strings or increment numbers. But what's happening when we append/increment
 * is not the string/number itself is changing but rather we're changing the value of the variable
 * we're assigning that value to.
 * 
 * By using immutable arrays and objects in our React applications we can optimize performance and
 * improve reliability. You can reply on data in a given object and know it will not change somewhere 
 * else in your application. While it's hard to see in a small application like this the performance and
 * reliability benefits, "immutability" is an important concept to learn because the bigger the
 * application is, the more performance and reliability matter.
 */

import React from 'react';
import update from 'react-addons-update';
import math from 'mathjs';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Button from './components/Button';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        /**
         * When we refer to a component's state, we mean a snapshot of the data belonging to a 
         * particular instance of the component. React's component can define their own state
         * which we'll use in today's post, and others in the future. Using the state property
         * allows us to manipulate a React component's view and data associated with the view to
         * keep track of local state of the component.
         */
        this.state = {
            operations: []
        };
        this.calculateOperations = this.calculateOperations.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    calculateOperations() {
        // We combine all entries in array into a string using 'join' method
        let result = this.state.operations.join('');
        if (result) {
            /**
             * We could use global "eval" function to evaluate the string, but this is prone to security
             * holes since it will evaluate any JavaScript expression, not just math expression. In 
             * future, if we want to expand our calculator to do more than just addition, substraction,
             * multiplication and division, it will beneficial to use a library that allows us to go
             * beyond those operations.
             * 
             * "mathjs" includes its own "eval" function which only parses mathematical expressions and
             * so it doesn't suffer from the same security pitfalls as using the global "eval". We'll
             * use math.eval() to calculate the result of our calculator inputs.
             * 
             * Here, we use mathjs "eval" function to evaluate the expression and wrap the expression
             * back into a string so it will display properly
             */
            result = String(math.eval(result));
            this.setState({ operations: [result] });
        }
    }
    handleClick(e) {
        let value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({ operations: [] });
                break;
            case 'equal':
                this.calculateOperations();
                break;
            default:
                /**
                 * We add the value of button to our operations array.
                 * We don't want to use regular "push" method for JavaScript arrays to add our values
                 * to this.state.operations because that modifies the original array. JavaScript arrays
                 * are mutable and we want our this.state.operations array to be immutable.
                 * 
                 * Rather than modifying this.state.operations, we want to return a new array that has
                 * the new value in it. React has an addon library "update" that allows us to create a
                 * new array or object every time we want to add a value to our object or array. We'll
                 * use this update function modify this.state.operations.
                 * 
                 * Here, it says take this.state.operations and "push" (add to) that array the "value".
                 * The "$push" syntax is interpreted as an operaton to the update() function.
                 */
                let newOperations = update(this.state.operations, {$push: [value]});
                this.setState({ operations: newOperations });
                break;
        }
    }
    render() {
        return (
            <div className="App">
                {/* Everytime this.setState is called and our operations array has changed, our Display
                component will change as well */}
                <Display data={this.state.operations} />
                <Buttons>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />

                    <Button onClick={this.handleClick} label="x" value="*" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button label="" value="" />

                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" size="2" value="+" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />
                </Buttons>
            </div>
        );
    }
}