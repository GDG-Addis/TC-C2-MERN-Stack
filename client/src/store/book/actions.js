import { BookActionTypes } from "./types";
import axios from "axios";

export const fetchBooksStart = () => ({
  type: BookActionTypes.BOOKS_FETCH_START,
});

export const fetchBooksSuccess = (books, page, limit, total) => ({
  type: BookActionTypes.BOOKS_FETCH_SUCCESS,
  payload: {
    books,
    page,
    limit,
    total,
  },
});

export const fetchBooksError = (error) => ({
  type: BookActionTypes.BOOKS_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Fetch book actions
 * @returns Action
 */

export const fetchBookStart = () => ({
  type: BookActionTypes.BOOK_FETCH_START,
});

export const fetchBookSuccess = (id, book) => ({
  type: BookActionTypes.BOOK_FETCH_SUCCESS,
  payload: {
    id,
    book,
  },
});

export const fetchBookError = (error) => ({
  type: BookActionTypes.BOOK_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Create book actions
 * @returns Action
 */

export const createBookStart = () => ({
  type: BookActionTypes.BOOK_CREATE_START,
});

export const createBookSuccess = (book) => ({
  type: BookActionTypes.BOOK_CREATE_SUCCESS,
  payload: {
    book,
  },
});

export const createBookError = (error) => ({
  type: BookActionTypes.BOOK_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearCreateBookSuccess = () => ({
  type: BookActionTypes.CLEAR_BOOK_CREATE_SUCCESS,
});

/**
 * Update book actions
 * @returns Action
 */

export const updateBookStart = () => ({
  type: BookActionTypes.BOOK_UPDATE_START,
});

export const updateBookSuccess = (id, book) => ({
  type: BookActionTypes.BOOK_UPDATE_SUCCESS,
  payload: {
    id,
    book,
  },
});

export const updateBookError = (error) => ({
  type: BookActionTypes.BOOK_UPDATE_ERROR,
  payload: {
    error,
  },
});

/**
 * Async Action Types
 */

export const fetchBooksAsync = (page, limit) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchBooksStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books`,
        {
          params: {
            page,
            limit,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        fetchBooksSuccess(
          response.data.result.docs,
          response.data.result.page,
          response.data.result.limit,
          response.data.result.total
        )
      );
    } catch (err) {
      dispatch(fetchBooksError(err));
    }
  };
};

export const fetchBookAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchBookStart());
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(fetchBookSuccess(id, response.data.book));
    } catch (err) {
      dispatch(fetchBookError(err));
    }
  };
};

export const createBookAsync = (formData) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(createBookStart());
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/books`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(createBookSuccess(response.data.book));
    } catch (err) {
      dispatch(createBookError(err));
    }
  };
};

export const updateBookAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(updateBookStart());
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/books/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateBookSuccess(id, response.data.book));
    } catch (err) {
      dispatch(updateBookError(err));
    }
  };
};
