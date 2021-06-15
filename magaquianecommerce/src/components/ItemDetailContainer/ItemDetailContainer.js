import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail'
function ItemDetailContainer() {
    
    const [ItemState, setItem] = useState([]);

    const items =
        {
            name: 'Item 1',
            image: 'https://www.mayoristastecno.com.ar/wp-content/uploads/2021/04/1000x1000-Fondo-Blanco-68-200x200.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            price: '200',
            stock: 10,
            id: 1
        }
    

    useEffect(()=>{
        const promise = new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                resolve(items)
            }, 2000);
            
        });
        promise.then(data =>{
            console.log(data)
            if(data){
                setItem(data);
              
            }else{
                throw new Error('error');
            }
        }, error =>{
            console.log(error);
        }
        ).catch(error =>{
            alert('NO HAY STOCK' +error);
        })
    }, []);


    return (
        <div className="row">
            <div className="col">
                <ItemDetail data = {ItemState}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
