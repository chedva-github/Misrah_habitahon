import * as React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux'
import { prodacts } from '../type';

export const ShowProdacts = () => {
    const allItems: any = useSelector((state: prodacts[]) => state);
    const [prodactByCaunt, setProdactByCaunt] = React.useState<any>();

    React.useEffect(() => {
        if (allItems.prodact.prodacts?.length > 0) {
            const itemsGroup = _.groupBy(allItems.prodact.prodacts, (prod) => prod.categoryId.name)
            const obj = [];
            for (const x in itemsGroup) {
                const result = _.groupBy(itemsGroup[x], 'name');
                const values = Object.values(result).map(
                    (group: string | any[]) => ({ ...group[0], qty: group.length })
                );
                obj.push({ categoryName: x, prodacts: values })
            }
            setProdactByCaunt(obj)
        }
    }, [allItems.prodact]);

    return (
        <div className='all_prodacts'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
                <p>-------------------------------------------------------------</p>
                <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {prodactByCaunt && prodactByCaunt.map((value: any) =>
                    <div key={value}>
                        <div>{value.categoryName} - {value.prodacts.length} מוצרים</div>
                        {value.prodacts.map((item: any) =>
                            <p>{item.name}  {`(${item.qty})`}</p>

                        )}
                    </div>
                )}
            </div>
        </div>
    );
}