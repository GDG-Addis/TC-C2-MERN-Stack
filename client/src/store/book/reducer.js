import { BookActionTypes } from "./types";

const INITIAL_STATE = {
  fetchBooksLoading: false,
  fetchBookLoading: false,
  createBookLoading: false,
  createBookSuccess: false,
  updateBookLoading: false,
  books: null,
  book: {},
  page: 1,
  limit: 15,
  total: 0,
  updateBookError: null,
  createBookError: null,
  fetchBookError: null,
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
    case BookActionTypes.BOOK_FETCH_START:
      return {
        ...state,
        fetchBookLoading: true,
        fetchBookError: null,
      };
    case BookActionTypes.BOOK_FETCH_SUCCESS:
      return {
        ...state,
        fetchBookLoading: false,
        book: {
          ...state.book,
          [action.payload.id]: action.payload.book,
        },
      };
    case BookActionTypes.BOOK_FETCH_ERROR:
      return {
        ...state,
        fetchBookLoading: false,
        fetchBookError: action.payload.error,
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

    case BookActionTypes.BOOK_UPDATE_START:
      return {
        ...state,
        updateBookLoading: true,
        updateBookError: null,
      };
    case BookActionTypes.BOOK_UPDATE_SUCCESS:
      return {
        ...state,
        updateBookLoading: false,
        book: {
          ...state.book,
          [action.payload.id]: action.payload.book,
        },
      };
    case BookActionTypes.BOOK_UPDATE_ERROR:
      return {
        ...state,
        updateBookLoading: false,
        updateBookError: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
