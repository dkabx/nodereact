import {createStore , applyMiddleware , compose,combineReducers} from 'redux';
import loginreducer from './reducers/login';
import getUserdetails from './reducers/users';
import thunk from 'redux-thunk';
 // const store = createStore(
 // 	loginreducer);
 // const store = compose(applyMiddleware(thunk))(createStore)(loginreducer,getUserdetails);?s
  const store = createStore(
  combineReducers({
    loginreducer,
    getUserdetails
  }),
  applyMiddleware(thunk)
);
 export default store;
