import React from 'react'

function CartDetail({props}) {
    console.log('Cart Detail');
   console.log(props);
    return (
        <div>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.cant}</td>
            <td>{props.cant *props.price }</td>
            <td><button className="btn btn-danger" value="X" ></button></td>
        </div>
    )
}

export default CartDetail
