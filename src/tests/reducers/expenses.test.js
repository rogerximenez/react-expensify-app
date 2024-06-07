import expensesReducer from "../../reducers/expenses"
import expenses from '../fixtures/expenses'


test('should setup default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

test('should add new expense', () => {
  const expense = {
    id: '5',
    description: 'Hammer',
    note: 'To hammer things',
    amount: 500,
    createdAt: 900
  }
  
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const note = 'this is a new note'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(note)
})

test('should not edit expense if not found', () => {
  const note = 'this is a new note'
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

test('should set expenses', () => {
  const newExpenses = {
    id: 12374,
    description: "something",
    note: "",
    amount: 100,
    createdAt: 1
  }
  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(newExpenses);
});