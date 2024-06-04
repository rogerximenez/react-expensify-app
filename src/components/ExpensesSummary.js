import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import expensesTotal from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWording = expensesCount === 1 ? 'expense' : 'expenses';
  const expenseTotalFormatted = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWording} totaling {expenseTotalFormatted}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary)