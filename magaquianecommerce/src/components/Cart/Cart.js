import React  ,{ useContext, useState} from 'react';
import cartContext from '../../context/cartContext.js';
import { getFirestore } from '../../conector/index.js';
import firebase from 'firebase';




const Cart = () => {

    const {cache,delete_cache, delete_item} = useContext(cartContext);

    const getTotal =() =>{
        let sum = 0;
        cache.map(item =>{
            sum += item.price * item.cant;
        });
        return sum;
    }

    const saveOrder =() =>{
      
        const db = getFirestore();
        const order = db.collection('Order');
        const newOrder ={
            buyer:{
                name : document.getElementById('userName').value,
                phone : document.getElementById('phone').value,
                email : document.getElementById('email').value
            },
            items: cache,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            
            total: getTotal()

        }

        order.add(newOrder).then(({id}) =>{
            alert('Order: '+id);
            delete_cache();
        })
       
    }
    return (
      
        <>
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
                                {cache.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.cant}</td>
                                        <td>{item.cant *item.price }</td>
                                        <td><button className="btn btn-danger" value="X" onClick={() =>delete_item(item.id)}>X</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <button type="button" className="btn-lg btn-danger" onClick={() =>delete_cache()}>Vaciar carrito</button>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                        
                    </div>
                </div>
            </div>

            <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-title">Personal Information</div>
                        <form>

                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="userName">Name &#38; lastname</label>
                                <input type="text" className="form-control" id="userName" placeholder="Name and last name" /* autoComplete="off" */ />
                            </div>

                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control" id="phone"  placeholder="Phone"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Terms &#38; Conditions</label>
                            </div>

                           
                           

                        </form>
                        <button type="submit" className="btn btn-lg btn-primary" onClick={() =>saveOrder()}>Submit</button>
                        
                   
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Cart
