import React from 'react';
import CartItem from '../CartItem/CartItem';


const Cart = () => {


    return (
        <div className="col-12">
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-dark table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem/>
                            
                        </tbody>
                    </table>

                    <button type="button "className="btn btn-danger">Vaciar carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
