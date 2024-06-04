import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
// import ExpensesSummary from "../../components/ExpensesSummary";

test('should render ExpenseSummary with one item', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={10}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple items', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={4} expensesTotal={312897}/>);
  expect(wrapper).toMatchSnapshot();
});