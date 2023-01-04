import actions from './action'

export const middle = ({ dispatch }) => next => async action => {

    if (action.type === 'GET_PRODACTS') {
        fetch('http://localhost:4000/getProdacts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                action.payload = result;
                return next(action)
            })
            .catch(error => console.log('error', error));
    }
    else 
    if (action.type === 'GET_CATEGORIES') {
        fetch('http://localhost:4000/getCategories', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                action.payload = result;
                return next(action)
            })
            .catch(error => console.log('error', error));
    }
    else if (action.type === 'ADD_PRODACT') {
        fetch('http://localhost:4000/addProdact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload),
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                dispatch(actions.addProdactSuccess(result))
                return next(action)
            })
            .catch(error => console.log('error', error));
    }
    return next(action);
};

