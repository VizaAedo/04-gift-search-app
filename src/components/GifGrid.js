import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category,numero}) => {
    const { data, images, loading } = useFetchGifs(category,numero);

//getGifs();
    return (     
             <>
                <h3 className='animate__animated animate__fadeIn'>{category}</h3> 
                { loading && <p className='animate__animated animate__flash'>Loading...</p>}
                { <div className='cardGrid'>           
                     {
                       data.map((img)=>(
                       <GifGridItem
                           key={ img.id}
                           { ...img}
                       />
                    ))
                     }
            </div>}             
        
        </>
    )
}
