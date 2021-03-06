import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS_FAILURE:
      return { ...state, books: [] };
    case actions.GET_BOOKS_SUCCESS: // TODO to implement the logic
      return { ...state, books: action.payload, originalData: action.payload };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state, bookSelected: [...state.bookSelected, action.payload] };
    case actions.ADD_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.map(item =>
          item.id === action.payload ? { ...item, quantity: (item.quantity += 1) } : item
        )
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.filter(item => item.id !== action.payload)
      };
    case actions.SEARCH_ITEM: {
      // TODO to implement the logic
      const filterText = action.payload.toLowerCase().trim();

      const books = filterText
        ? state.books.filter(book => book.name.toLowerCase().includes(filterText))
        : state.originalData;

      return {
        ...state,
        books
      };
    }
    default:
      return state;
  }
}

export default reducer;
