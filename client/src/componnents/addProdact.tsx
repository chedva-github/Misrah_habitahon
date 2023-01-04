import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { categories, prodacts } from '../type';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import action from '.././redux/action'

export const AddItem = () => {
    const categoriesSelector: any = useSelector((state: prodacts[]) => state);
    const [category, setCategory] = React.useState<string>();
    const [prodactName, setProdactName] = React.useState<string>();
    
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const nameProdactAddHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProdactName(event.target.value)
    };

    const add = () => {
        const categoryId = categoriesSelector.prodact.categories.find((c: any)=> c.name === category)
        dispatch(action.addProdact({ name: prodactName, categoryId: categoryId._id }))
    };


    return (
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', width:'30%', margin: '50px', float: 'right'}}>
            <TextField label="הקלד שם מוצר להוספה" variant="outlined" onChange={nameProdactAddHandle} />
            <FormControl style={{minWidth: 200}}>
                <InputLabel>קטגוריה</InputLabel>
                <Select
                    value={category}
                    label="קטגוריה"
                    onChange={handleChange}
                >
                    {categoriesSelector?.prodact?.categories?.map((categoryItem: categories) => (
                        <MenuItem
                            key={categoryItem.id}
                            value={categoryItem.name}
                        >
                            {categoryItem.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" onClick={add}>הוסף</Button>
        </div>
    );
}