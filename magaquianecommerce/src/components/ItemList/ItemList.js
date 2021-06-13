import React from 'react'
import './ItemList.css';
import Item from '../Item/Item';

function ItemList(props) {

   
    console.log(props);


   return(
       
        props.map((e) =>{
            <Item 
            name = {e.name}
            image ={e.image}
            desc ={e.desc}
            price ={e.price}
            stock ={e.stock} 
        />
        })
   )
            
}
    



export default ItemList
