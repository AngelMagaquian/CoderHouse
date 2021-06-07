import React , { useState } from 'react'
import './Item.css';

function Item(props) {
    const [contador, setContador] = useState(0);
    return (
            
                <div className="col-lg-4 col-md-6 col-12 Item-container">
                    <div className="card my-5 style='width: 18rem;'">
                        <div className="card-body">
                                <h5 className="card-title">{props.name}</h5>
                                <img className="card-img-top" src={props.image} alt="Card image cap"></img>
                                <p className="card-footer">{props.desc}</p>
                                <p className="card-text">Price:${props.price}</p>

                                <div className="card-control">
                                    <button  className="btn btn-danger btn-block" onClick={() => {setContador(contador - 1);}}>-</button>
                                    <input className="Item-count" readOnly disabled value={contador}></input>
                                    <button  className="btn btn-success btn-block" onClick={() => {setContador(contador + 1);}}>+</button>
                                </div>
                            </div>
                        </div>
                </div>       
    );
}

export default Item
