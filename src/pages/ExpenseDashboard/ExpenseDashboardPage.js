import React from "react";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import ExpenseListFilter from "../../components/ExpenseListFilters/ExpenseListFilters";
import ExpensesSummary from "../../components/ExpensesSummary/ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;