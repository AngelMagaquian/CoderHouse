import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = () => {
    return (
        <div className="ItemList-container container">
            
            <div className="row">
                <div className="col-12">
                    <h1 className="ItemList-title">HOLO</h1>
                </div>

                {/* <div className="col-12">
                    <div className="row">
                        {itemList.map((e) => <Item 
                            name ={e.name}
                            image ={e.image}
                            desc ={e.desc}
                            price ={e.price}
                            stock ={e.stock}
                        />
                        )} 
                          
                    </div>
                   
                </div> */}

               <ItemList/>

            </div>
            
            
        </div>
    )
}

export default ItemListContainer
