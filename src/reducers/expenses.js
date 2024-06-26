const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense, // grab all existing properties
            ...action.updates // override any properties passed down
          };
        } else {
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;