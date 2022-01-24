import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, numero) => {

    const [state, setState]=useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category, numero)
           .then( imgs => {               
               setState({
                   data: imgs,
                   loading: false
               })           
             });

   }, [category])
    return state;
}
