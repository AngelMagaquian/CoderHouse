import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Count from '../../utils/Count/Count.js';
function ItemDetail(props) {
    const [product, setProduct] = useState(0);
    
    const onAdd = (amount) => {
        setProduct(amount);
    }

    const upPrince = (amount) =>{
        return amount * props.price
    }

    const { id }=useParams();
    return (
        <div className="col-lg-4 col-md-6 col-12 Item-container">
            <div className="card my-5 style='width: 18rem;'">
                <div className="card-body">
                    <h1>Detalles del producto #{ id }</h1>
                    <h5 className="card-title">{props.name}</h5>
                    <img className="card-img-top" src={props.image} alt="Card image cap"></img>
                    <p className="card-footer">{props.desc}</p>
                    <p className="card-text">Price: ${props.price}</p>
                    <p className="card-text">Stock: {props.stock}</p> 
                    <p className="card-text">Id: {props.id}</p> 
                    
                    <Count stock={props.stock} inital={0} onAdd={onAdd}/>

                    {product >= 1 ? (<p className="card-footer">Total: ${upPrince(product)}</p>) : (<p className="card-footer">Total: ${0} </p>)}

                   
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
