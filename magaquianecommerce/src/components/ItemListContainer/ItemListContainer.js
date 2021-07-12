import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
//import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router';
import { getFirestore } from '../../conector/index.js';



const ItemListContainer = () => {
    const {id} = useParams();

    const [ItemState, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('ItemList');
        itemCollection
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              
              return;
            }
            /* setItem(querySnapshot.docs.map(doc => doc.data())); */
            setItem(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
           
          })
          .catch(error => {
            console.log(error);
          
          });
    }, []);

      console.log(ItemState);
   
    
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
