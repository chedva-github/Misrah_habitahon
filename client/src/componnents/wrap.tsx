
import React from 'react';
import { TotalItems } from './totalItems';
import { AddItem } from './addProdact';
import { ShowProdacts } from './showProdacts';
import { useDispatch } from 'react-redux'
import action from '../redux/action'

export default function Wrap() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        console.log('ffffff')
        dispatch(action.getProdacts());
        dispatch(action.getCategories())
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <div className='wrap'> רשימת קניות </div>
            <TotalItems />
            <AddItem />
            <ShowProdacts />
        </>
    );
}

