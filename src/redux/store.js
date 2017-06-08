import {createStore , applyMiddleware , compose} from 'redux';
import loginreducer from './reducers/login';
import thunk from 'redux-thunk';
 // const store = createStore(
 // 	loginreducer);
 const store = compose(applyMiddleware(thunk))(createStore)(loginreducer);
 export default store;