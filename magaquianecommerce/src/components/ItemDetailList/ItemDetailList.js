import React, { Component } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailList({data}) {
    console.log('la prop');
    console.log(data);
   return(
              
        <ItemDetail 
            id = {data.id}
            name = {data.name}
            image ={data.image}
            desc ={data.desc}
            price ={data.price}
            stock ={data.stock} />
   )
            
}
    



export default ItemDetailList

