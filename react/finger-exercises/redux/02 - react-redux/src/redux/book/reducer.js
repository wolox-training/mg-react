import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

/* {
  if (item.id === action.payload) {
    item.quantity += 1;
    return item;
  }
} */
function addBook(books, idTofilter) {
  return books;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return { ...state, books: action.payload };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state, bookSelected: [...state.bookSelected, action.payload] };
    case actions.ADD_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.map(item =>
          item.id === action.payload ? { ...item, quantity: (item.quantity += 1) } : { ...item }
        )
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.filter(item => item.id !== action.payload)
      };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
