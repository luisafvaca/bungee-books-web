const initialState = {
  count: 0,
  toDos: ['comprar la leche', 'comprar los huevos', 'comida pa los loritos']
};

const bungeBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    break;
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1
      })
    break;
    default:
      return state;
  }
};

export default bungeBooksReducer;
