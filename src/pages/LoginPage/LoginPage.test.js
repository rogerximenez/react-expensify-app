import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "./LoginPage";

let wrapper, startLogin;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />)
})

test('should render the Login Page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should startLogin on click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
})