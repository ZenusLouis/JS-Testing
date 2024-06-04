import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello Component', () => {
    it('should render correctly with given props', () => {
        const wrapper = shallow(<Hello name="World" />);
        expect(wrapper.find('h1').text()).toBe('Hello, World!');
    });

    it('should render correctly with different props', () => {
        const wrapper = shallow(<Hello name="React" />);
        expect(wrapper.find('h1').text()).toBe('Hello, React!');
    });
});
