import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const ProductDisplay = () => {
    const{ id: productId } = useParams();
    const[ product,setProduct ] =useState([]);

    useEffect(() =>{
        const fetchdta = async () => {
            try{
                 await axios.get(`https://dummyjson.com/products/${productId}`)
                 .then(Response =>{
                        console.log(Response.data);
                        setProduct(Response.data)
                 })
            } catch (error){
                console.log({error});
            }
        }
        if(productId){
            fetchdta();
        }
    }, [productId]);
  return {
    product
  };
};
