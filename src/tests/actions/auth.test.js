import { login, logout } from '../../actions/auth'

test('should setup login', () => {
  const uid = '123'
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should setup logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})