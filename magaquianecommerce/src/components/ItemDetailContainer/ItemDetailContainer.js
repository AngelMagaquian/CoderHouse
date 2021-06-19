import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
/* import ItemDetail from '../ItemDetail/ItemDetail'; */
import ItemDetailList from '../ItemDetailList/ItemDetailList.js'
import {products} from '../../utils/Products/Products'; 
import { useParams } from 'react-router';

function ItemDetailContainer() {
    const {id} = useParams();
    const [ItemState, setItem] = useState([]);



    useEffect(()=>{
        const promise = new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                resolve(products)
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
                <ItemDetailList data = { ItemState } id = { id }/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
