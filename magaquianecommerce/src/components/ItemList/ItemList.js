import React from 'react'
import './ItemList.css';
import Item from '../Item/Item';

function ItemList() {

    const items =[
        {
            name: 'Item 1',
            image: 'https://www.mayoristastecno.com.ar/wp-content/uploads/2021/04/1000x1000-Fondo-Blanco-68-200x200.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: '200',
            stock: 10
        }
    ];

    const promise = new Promise ((resolve, reject) =>{
            resolve(items)
    });

    return(
        promise.then(
            data =>{
                    return(
                        data.map((e)=>
                        {<Item 
                            name ={e.name}
                            image ={e.image}
                            desc ={e.desc}
                            price ={e.price}
                            stock ={e.stock}/>}
                        )
                    );
                
            }, error =>{
                console.log(error);
            }
            ).catch(error =>{
                alert('NO HAY STOCK' +error);
            })
    )
    
    
    
}

export default ItemList
