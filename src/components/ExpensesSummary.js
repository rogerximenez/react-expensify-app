import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import numeral from "numeral";
import expensesTotal from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWording = expensesCount === 1 ? 'expense' : 'expenses';
  const expenseTotalFormatted = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWording} totaling <span>{expenseTotalFormatted}</span></h1>
        <div className="page-header__actions">
          <Link className="btn-primary" to="/dashboard/create">Add Expense</Link>
        </div>
      </div>
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