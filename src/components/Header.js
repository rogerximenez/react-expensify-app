import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/dashboard/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/dashboard/help" activeClassName="is-active">Help</NavLink>
  </header>
)

export default Header;