import * as React from 'react';
import { useSelector } from 'react-redux'
import { prodacts } from '../type';

export const TotalItems = () => {
    const totalItems: any = useSelector((state: prodacts[]) => state);


    return (
        <div className='total_items'> סך הכל:&ensp;
           {totalItems?.prodact?.prodacts?.length} 
           &ensp; מוצרים
        </div>
    );
}