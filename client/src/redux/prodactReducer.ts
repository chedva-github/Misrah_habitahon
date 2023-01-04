import produce from 'immer';
import execHandler from './reducer';
import {type} from '../type';

const initialState: type = {
    categories: [],
    prodacts: [],
}

const prodact = {
    addProdactSuccess(state: type, action: any){
        state.prodacts.push(action.payload)
    },
    getCategories(state: type, action: any){
        state.categories=action.payload;
    },
    getProdacts(state: type, action: any){
        state.prodacts=action.payload;
    },
     initialState
}

export default produce((state, action)=>{
    execHandler(state, action, prodact)
},initialState)