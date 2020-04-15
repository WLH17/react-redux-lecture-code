//When needing to use promise middleware, you need to bring in
//applyMiddleware, as well as redux-promise-middleware. This will
//allow you to handle promises better within your reducers.

//When using multiple reducers, you need to use combineReducers.
//combineReducers will bundle your reducers together so all of your
//reducers are available to your application.
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import starWarsReducer from './starWarsReducer';

//create a rootReducer variable and set it equal to combineReducers
//invoked. Pass combineReducers an object that contains your 
//reducer files.
const rootReducer = combineReducers({
    reducer,
    starWarsReducer
})

//Export statements in the store file should be passed the
//rootReducer, as well as any middlewares your are using.
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));