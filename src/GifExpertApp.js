
import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
   
    const [category, setCategory] = useState(['Rick and Mory'])

    //const handleAdd = () =>{
    //    setCategory([...category,'Hunter'])
    //}

    return (
        <>
        <h2>GifExpertApp</h2>
        
        <hr/>
        <h3>Add Category</h3>
        <AddCategory setCategory = {setCategory}/>
        <ol>
            {
                category.map(category =>
                    <GifGrid category = {category} key = {category}/>
                )
            }
        </ol>

        </>
    )
}

