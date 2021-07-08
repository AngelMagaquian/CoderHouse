import React, {useContext}  from 'react'
import cartContext from '../../context/cartContext.js';

function CartDetail({props}) {
    console.log('Cart Detail');
    const { delete_item } = useContext(cartContext);
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.cant}</td>
            <td>{props.cant *props.price }</td>
            <td><button className="btn btn-danger" value="X" onClick={() =>delete_item(props.id)}>X</button></td>
        </tr>
    )
}

export default CartDetail
