import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import * as amplitude from '@amplitude/analytics-browser';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const container = document.getElementById('app');
ReactDOM.render(<p>Loading...</p>, container);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, container);
});

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log('Logged In')
  } else {
    console.log('Logged Out')
  }
})