import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

describe(HelloWorldList, () => {
    const component = shallow(
        <HelloWorldList />
    );

    // snapshot test
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorldList />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // include AddGreeter component in our component
    it('contains an AddGreeter subcomponent', () => {
        /**
         * We use .find(<element>) to find a DOM element (via selectors) or class name for a 
         * component (such as AddGreeter here) to find specific elements.
         */
        expect(component.find(AddGreeter)).toHaveLength(1);
    });

    // we render the number of "HelloWorld" components that we have entries in greetings state
    // in the component
    it('contains the same number of HelloWorld components as greetings', () => {
        const helloWorlds = component.find(HelloWorld).length;
        // Use .state(<key>) function on a component to fetch a value out of state
        const greetings = component.state('greetings').length;
        // we expect, given how "renderGreetings" works, to find same number of "HelloWorld"
        // components as the number of entries as the "greetings" array in our component's state.
        expect(helloWorlds).toEqual(greetings);
    });

    // test for addGreeting function
    it('adds another greeting when the add greeting function is called', () => {
        const before = component.find(HelloWorld).length;
        /**
         * If you want to call a function directly on a component in a test, you do so by
         * referencing the component, calling the .instance() function on it, and then
         * calling whatever function we want to call from there (such as addGreeting)
         */
        component.instance().addGreeting('Sample');
        // Update the component (this is important as you test will fail without it)
        component.update();
        const after = component.find(HelloWorld).length;
        expect(after).toBeGreaterThan(before);
    });

    // test for removeGreeting function
    it('removes a greeting from the list when the remove greeting function is called', () => {
        const before = component.find(HelloWorld).length;
        // the removeGreeting expects an entry to remove, so we just grab the first element
        // out of state (again, this ensures that nothing in our tests make assumptions
        // about the initial state or hard-coded values in our components)
        const removeMe = component.state('greetings')[0];
        component.instance().removeGreeting(removeMe);
        component.update();
        const after = component.find(HelloWorld).length;
        expect(after).toBeLessThan(before);
    });
});