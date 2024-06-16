import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../pages/LoginPage/LoginPage';
import ExpenseDashboardPage from '../pages/ExpenseDashboard/ExpenseDashboardPage';
import AddExpensePage from '../pages/AddExpensePage/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage/EditExpensePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
        <PrivateRoute path="/dashboard/create" component={AddExpensePage} />
        <PrivateRoute path="/dashboard/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;