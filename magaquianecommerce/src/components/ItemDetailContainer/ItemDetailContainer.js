import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
/* import ItemDetail from '../ItemDetail/ItemDetail'; */
import ItemDetailList from '../ItemDetailList/ItemDetailList.js'
import {products} from '../../utils/Products/Products'; 
import { getFirestore } from '../../conector/index.js';
import { useParams } from 'react-router';

function ItemDetailContainer() {
    const {id} = useParams();
    const [ItemState, setItem] = useState([]);
    const [items, setItems] = useState([]);



    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('ItemList');
        const getItemId = itemCollection.doc(id)
        //const getItemId = itemCollection.where('id','==', 'wwycqBYAB0IOT9wQr9jp');
        //const getItemId = itemCollection.where('id','==', {id});
        //const getItemId = itemCollection.where('id','==', 2);
        getItemId
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              
              return;
            }
            setItem(querySnapshot.docs.map(doc => doc.data()));
            console.log(querySnapshot);
           
          })
          .catch(error => {
            console.log(error);
          
          });
    }, []);

    

    console.log(ItemState);
    return (
        <div className="row">
            <div className="col">
               <ItemDetailList data = { ItemState }/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
