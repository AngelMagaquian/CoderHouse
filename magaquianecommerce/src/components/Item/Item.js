import React  from 'react'
import './Item.css';
import Count from '../../utils/Count/Count.js';
import { NavLink } from 'react-router-dom';

function Item(props) {
    const onAdd = (amount) => {
        alert('Compraste: '+amount);
    }
    return (  
        <div className="col-lg-4 col-md-6 col-12 Item-container">
            <div className="card my-5 style='width: 18rem;'">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                        <img className="card-img-top" src={props.image} alt="Card image cap"></img>
                        <p className="card-footer">{props.desc}</p>
                        <p className="card-text">Price: ${props.price}</p>
                        <p className="card-text">Stock: {props.stock}</p>
                        <p className="card-text">Id: {props.id}</p>
                        <Count stock={props.stock} inital={1} onAdd={onAdd}/>

                        <br></br>
                        <NavLink activeClassName="nav-link:hover"  to="/ItemDetail/1"> {/*ponerle id de la props*/}
                            <button className="btn btn-info">Ver detalle</button>
                        </NavLink>
                        
                </div>
            </div>
        </div>       
    );
}

export default Item
