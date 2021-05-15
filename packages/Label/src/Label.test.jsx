import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Label from './Label';

configure({ adapter: new Adapter() });

describe('Label tests', () => {
    let wrapper;
    it('should mount Lebel component and instance should be null', () => {
        expect.assertions(1);
        wrapper = shallow(<Label name="avi"/>);
        const instance = wrapper.instance();
        expect(instance).toBeNull();
    });
})
