import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import bookReducer from "./book/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
});

export default rootReducer;
