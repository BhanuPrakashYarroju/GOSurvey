import { applyMiddleware, createStore} from "redux";
import {questionReducer} from './reducers/questionReducer'
import thunk from "redux-thunk";

const store = createStore(questionReducer,applyMiddleware(thunk));
export default store