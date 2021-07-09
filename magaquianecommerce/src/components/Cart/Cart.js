import React  ,{ useContext, useState, useEffect } from 'react';
import cartContext from '../../context/cartContext.js';



const Cart = () => {
    const [Items, setItems] = useState([]);
    const {cache,delete_cache } = useContext(cartContext);

    

    useEffect(()=>{
        const promise = new Promise ((resolve, reject) =>{
            resolve(cache)
        });
        promise.then(data =>{
            if(data){
                setItems(data);
            }else{
                throw new Error('error');
            }
        }, error =>{
            console.log(error);
        }
        ).catch(error =>{
            alert('NO HAY ITEMS' +error);
        })
    }, []);

    function delete_item(id){
        console.log('delete item');
        const newCache = Items.filter(x => x.id != id);
        setItems(newCache);
    } 

    

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
                            {Items.map(item => (
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
                </div>
            </div>
        </div>
    )
}

export default Cart
