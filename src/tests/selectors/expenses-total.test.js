import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from "../fixtures/expenses"

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([])
  expect(res).toBe(0)
})

test('should add up a single expenses', () => {
  const value = expenses[2].amount
  const res = selectExpensesTotal([expenses[2]])
  expect(res).toBe(value)
})

test('should add up multiple expenses expenses', () => {
  const res = selectExpensesTotal(expenses)
  expect(res).toBe(114195)
})