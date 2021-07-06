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
