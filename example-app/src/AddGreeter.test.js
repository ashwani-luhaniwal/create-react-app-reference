import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddGreeter from './AddGreeter';

describe(AddGreeter, () => {
    const mockAddGreeting = jest.fn();
    const component = shallow(
        <AddGreeter addGreeting={mockAddGreeting} />
    );

    // snapshot test
    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <AddGreeter />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // test for input form
    it('contains the form', () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    });

    // test for addGreeting function
    it('calls the passed in addGreeting function when add button is clicked', () => {
        component.find('button').simulate('click');
        expect(mockAddGreeting).toBeCalled();
    });

    // test for handleUpdate function which will update the "greetingName" state value by 
    // adding whatever is passed in to it to that value:
    it('updates the form when keys are pressed', () => {
        const updateKey = 'foo';
        // it expects event.target.value structure to be passed in, so we just need to
        // structure our argument to handleUpdate function in the same way.
        component.instance().handleUpdate({ target: {value: updateKey} });
        expect(component.state('greetingName')).toEqual(updateKey);
    });

    // test to verify the state is cleared out
    it('blanks out the greetingName when the button is clicked', () => {
        const updateKey = 'a';
        component.instance().handleUpdate({ target: {value: updateKey} });
        expect(component.state('greetingName')).toEqual(updateKey);
        component.find('button').simulate('click');
        expect(component.state('greetingName')).toHaveLength(0);
    });
});