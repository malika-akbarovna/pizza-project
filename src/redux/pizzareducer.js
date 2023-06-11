const initialState = {
  isLoading: false,
  pizzaList: [],
  single: {},
  ordered: [],
};

const addToOrder = (state, item) => {
  // console.log(state.ordered);
  return {
    ...state,
    ordered: item,
  };
};

const deleteOrder = (state, item) => {
  // console.log(state.ordered);
  return {
    ...state,
    ordered: state.ordered.filter((items) => {
      return items !== item;
    }),
  };
};

const savepizzaList = (state, pizzaList = []) => {
  return {
    ...state,
    pizzaList: pizzaList,
  };
};

const savepizza = (state, pizza = {}) => {
  return {
    ...state,
    single: pizza,
  };
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case `SAVE_PIZZA`:
      return savepizzaList(state, action.payload);
    case `SAVE_SINGLE_PIZZA`:
      return savepizza(state, action.payload);
    case `SAVE_ORDER`:
      return addToOrder(state, action.payload);
    case `SAVE_DELETE`:
      return deleteOrder(state, action.payload);
    default:
      return state;
  }
};

export default sneakersReducer;
