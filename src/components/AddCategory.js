/* eslint-disable react/no-typos */
import React, { useState } from 'react'
import PropTypes from 'prop-types'  

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange  = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Submit Done');
        if(inputValue.trim().length > 2){
        setCategory(cats => [ inputValue, ...cats, ])
        setInputValue('')
        }
    }

    return (
        
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
                />
            
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
