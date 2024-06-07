import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test('should render the Login Page', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot();
})