import React, {useState} from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('')
    
    const addNewValidCategory = () =>{
        if(inputValue.length > 2){
            setCategory(init_cat => {
                const isTheSame = (element) => element === inputValue;
                return !init_cat.find(isTheSame) ? [...init_cat, inputValue] : [...init_cat]
            })
            setInputValue('')
        }
    }

    const handlerInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()        
        addNewValidCategory()
        
    }

    const handleAdd = () => {        
        addNewValidCategory()
    }

    return (
        <form onSubmit={handlerSubmit}>
            <h2> Add Category</h2>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handlerInputChange }
            />      
            <button onClick={handleAdd}>Add</button>  
        </form>
    )
        
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}