import React from 'react'
import './ItemList.css';
import Item from '../Item/Item';

function ItemList(props) {
    console.log(props);
   return(
            props.data.map((e)=>{
                if(props.id == 'products'){
                    return <Item 
                        id = {e.id}
                        name = {e.name}
                        image ={e.image}
                        desc ={e.desc}
                        price ={e.price}
                        stock ={e.stock} 
                    />
                }else{
                    if(props.id == e.category){
                        return <Item 
                            id = {e.id}
                            name = {e.name}
                            image ={e.image}
                            desc ={e.desc}
                            price ={e.price}
                            stock ={e.stock} 
                        />
                    }
                }
                
                
            })

   )
            
}
    



export default ItemList
