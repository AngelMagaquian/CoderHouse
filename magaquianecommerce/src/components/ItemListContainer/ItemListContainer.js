import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
//import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import {products} from '../../utils/Products/Products'; 
import { useParams } from 'react-router';



const ItemListContainer = () => {
    const {id} = useParams();
    const [ItemState, setItem] = useState([]);
   

    useEffect(()=>{
        const promise = new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                resolve(products)
            }, 2000);
            
        });
        promise.then(data =>{
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
        <div className="ItemList-container container">
            
            <div className="row">
                <div className="col-12">
                    <h1 className="ItemList-title"></h1>
                </div>
                <ItemList data = {ItemState} id= {id}/>
            </div>
        </div>
    )
}

export default ItemListContainer
