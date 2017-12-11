import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NavigationItems/>);
	})

	it('should render two <NavigationItem /> elements if not Authenticated', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	})

	it('it should contain <NavigationItem>Checkout</NavigationItem>', () => {
		expect(wrapper.contains(<NavigationItem Link='/'>Checkout</NavigationItem>)).toEqual(false);
	})

	it('it should define <NavigationItem>Burger Item</Navigation>', () => {
		expect(wrapper.contains(<NavigationItem Link='/'>Burger Builder</NavigationItem>)).toBeDefined();
	})

	// it('should render three <NavigationItem /> elements if Authenticated', () => {
		 // Two ways to test props isAuthenticated
		 // 1) wrapper = shallow(<NavigationItems isAuthenticated/>);
		 // 2) wrapper.setProps({isAuthenticated: true});
		 // expect(wrapper.find(NavigationItem)).toHaveLength(3);
	// })

})