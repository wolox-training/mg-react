import getBooks from '@services/BookServices';
/**
 * See the @@BOOKS? That's the namespace.
 * We use it to ensure an action type belongs to only one store branch. Also,
 * we can filter the actions shown by redux dev tools to see only the actions
 * related to @@BOOKS for easier debugging.
 */
export const actions = {
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOK/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOK/GET_BOOKS_FAILURE',
  ADD_TO_CART: '@@BOOK/ADD_TO_CART',
  ADD_ITEM: '@@BOOK/ADD_ITEM',
  REMOVE_ITEM: '@@BOOK/REMOVE_ITEM',
  SEARCH_ITEM: '@@BOOK/SEARCH_ITEM'
};

const actionsCreators = {
  getBooks: () => async dispatch => {
    const response = await getBooks.then(res => res);
    if (response.length) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response
      });
    } else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE,
        payload: []
      });
    }
  },
  addToCart: item => ({
    type: actions.ADD_TO_CART,
    payload: item
  }),
  addItem: itemId => ({
    type: actions.ADD_ITEM,
    payload: itemId
  }),
  removeItem: itemId => ({
    type: actions.REMOVE_ITEM,
    payload: itemId
  }),
  searchBook: value => ({
    type: actions.SEARCH_ITEM,
    payload: value
  })
};

export default actionsCreators;
