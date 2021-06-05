import './ItemListContainer.css';
import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div className="ItemList-container">
            <h1 className="ItemList-title">{props.title}</h1>
        </div>
    )
}

export default ItemListContainer
