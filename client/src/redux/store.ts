import { createStore, combineReducers, applyMiddleware} from 'redux'
import prodact from './prodactReducer'
import { middle } from './middleware';

const reducer = combineReducers({ prodact });
const store = createStore(reducer,(applyMiddleware(middle)));

export default store