import React, { Component } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailList(props) {
    const {id} = useParams();
    console.log(props);
   return(
            props.data.map((e)=>{
                if(props.id == e.id){
                    return <ItemDetail 
                        id = {e.id}
                        name = {e.name}
                        image ={e.image}
                        desc ={e.desc}
                        price ={e.price}
                        stock ={e.stock} 
                    />
                }
                
            })

   )
            
}
    



export default ItemDetailList

