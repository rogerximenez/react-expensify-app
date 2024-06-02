import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../../actions/filters";
import moment from "moment";

test('should set text filter action object with value', () => {
  const action = setTextFilter('rent')
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: 'rent'
  })
})

test('should set text filter action object with default', () => {
  expect(setTextFilter()).toEqual ({
    type: 'TEXT_FILTER',
    text: ''
  })
})

test('should generate set sort by amount object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should generate set sort by date object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})