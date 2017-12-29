import React from 'react';
import { shallow } from 'enzyme';
// "renderer" object from "react-test-renderer" to build our snapshot test that Jest will use.
// This functionality grabs a rendered "snapshot" of your component tree and compares it
// against a stored snapshot.
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

/**
 * A describe function tells Jest that our tests describe the behavior and functionality of
 * particular component, concept or suite of tests. You can either describe a component using
 * its name or you can just provide a string to a describe function, like as follows: 
 * 
 *  describe('My Test', () => { ... });
 */
describe(HelloWorld, () => {
    // Add the rest of our tests here
    const name = 'Person';
    /**
     * jest.fn() is special syntax to create a mock function. A mock is a facsimile function:
     * it doesn't actually do the work that it stands in place of; it merely simulates it,
     * records attempts to call it, and optionally looks for arguments or fakes return 
     * values. 
     */
    const mockRemoveGreeting = jest.fn();
    // shallow render
    /**
     * A shallow render is a simulated render of a component tree. It allows for deeper
     * inspection then the snapshot level, such as looking for specific DOM elements and 
     * their contents, as well as simulating user interaction.
     */
    const component = shallow(
        <HelloWorld name={name} removeGreeting={mockRemoveGreeting} />
    );

    /**
     * We start off by calling "renderer.create", and passing to that function the JSX that
     * we want to build into our new snapshot. Then we take that snapshot and turn it into
     * a JSON representation of the tree. Finally using Jest, we tell it that we are 
     * expecting JSON representation of our snapshot to match the stored snapshot that we 
     * already have. This will tell us if someone starts making fundamental changes to our
     * component without updating the tests!
     */
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorld name="Person" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the supplied name', () => {
        // It grabs the text inside of rendered component, and setup an expectation that
        // the text should contain the name that we passed to the component via props.
        expect(component.text()).toContain(name);
    });

    it('modifies the greeting when frenchify button is clicked', () => {
        component.find('button.frenchify').simulate('click');
        expect(component.text()).toContain('Bonjour');
    });

    it('calls the passed in removeGreeting function when remove button is clicked', () => {
        component.find('button.remove').simulate('click');
        expect(mockRemoveGreeting).toBeCalled();
    });
});