import React, { useState }from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GiftSearchApp = () => {

    //const categories = [ 'One Piece'];
    
    const [categories, setCategories] = useState(['One Piece']);
    const [inputvalue, setinputvalue] = useState('2')
    
    const handleInputChange = (e) => {
        //console.log(e.taget.value);
        setinputvalue(e.target.value);
    }
    
    return (
        <div>
            <h2>GiftSearchApp</h2>
            <AddCategory setCategories ={setCategories}/>´
            <h3>numero</h3>              
            <form  >
                <input 
                    type = "text"
                    value ={inputvalue}
                    onChange={ handleInputChange }
                />
            </form>
             <hr/>            
            <ol>
                {
                    categories.map( (category)=>(       
                              <GifGrid
                                  key ={category} 
                                  category = {category}
                                  numero={inputvalue}                                 
                                  
                              />  
                                                                 
                    ))
                }
            </ol>
        </div>
    )
}
