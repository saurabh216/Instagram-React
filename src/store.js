import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addPostReducer } from './Reducers/addPostReducer';
import { getPostReducer } from './Reducers/getPostReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    addPostReducer,
    getPostReducer
}),applyMiddleware(thunk));

export default store;