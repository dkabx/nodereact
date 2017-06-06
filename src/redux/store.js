import {createStore} from 'redux';
import loginreducer from './reducers/login';
 const store = createStore(
 	loginreducer);
 
 export default store;