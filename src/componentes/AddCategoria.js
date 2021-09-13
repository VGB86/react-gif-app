import React, {useState} from 'react';
import { PropTypes } from "prop-types";

export const AddCategoria = ({setCategorias}) => {

   
    const [inputValue, setInputValue] = useState('');

    //evento
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Input
    const handleSubmit = (e) =>{
        e.preventDefault();

         if(inputValue.trim().length >2){
            setCategorias(cats => [inputValue,...cats ]);
            setInputValue('');
         }
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Buscar Gifs"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}