import { BookActionTypes } from "./types";

const INITIAL_STATE = {
  fetchBooksLoading: false,
  createBookLoading: false,
  createBookSuccess: false,
  books: null,
  page: 1,
  limit: 15,
  total: 0,
  createBookError: null,
  fetchBooksError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.BOOKS_FETCH_START:
      return {
        ...state,
        fetchBooksLoading: true,
        fetchBooksError: null,
      };
    case BookActionTypes.BOOKS_FETCH_SUCCESS:
      return {
        ...state,
        fetchBooksLoading: false,
        books: action.payload.books,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
      };
    case BookActionTypes.BOOKS_FETCH_ERROR:
      return {
        ...state,
        fetchBooksLoading: false,
        fetchBooksError: action.payload.error,
      };

    case BookActionTypes.BOOK_CREATE_START:
      return {
        ...state,
        createBookLoading: true,
        createBookError: null,
      };
    case BookActionTypes.BOOK_CREATE_SUCCESS:
      return {
        ...state,
        createBookLoading: false,
        createBookSuccess: true,
        books: [action.payload.book, ...state.books],
      };
    case BookActionTypes.BOOK_CREATE_ERROR:
      return {
        ...state,
        createBookLoading: false,
        createBookError: action.payload.error,
      };
    case BookActionTypes.CLEAR_BOOK_CREATE_SUCCESS:
      return {
        ...state,
        createBookSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;
