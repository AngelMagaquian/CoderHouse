import React, { Component } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailList(props) {

    console.log(props);
   return(
              
        <ItemDetail 
            id = {props.id}
            name = {props.name}
            image ={props.image}
            desc ={props.desc}
            price ={props.price}
            stock ={props.stock} />
   )
            
}
    



export default ItemDetailList

