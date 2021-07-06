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
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <th scope="row">1</th>
                                <td>Mouse LG</td>
                                <td>Mouse Gamer</td>
                                <td>$12</td>
                                <td>2</td>
                                <td>$24</td>
                                <td><button className="btn btn-danger" value="X" ></button></td> */}

                                <CartItem/>

                            </tr>
                        </tbody>
                    </table>

                    <button type="button "className="btn btn-danger" value="Vaciar carrito"></button>
                </div>
            </div>
        </div>
    )
}

export default Cart
