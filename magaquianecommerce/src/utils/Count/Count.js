import React , { useState } from 'react'
import './Count.css';

function Count({stock, inital, onAdd, btnState}) {
    const [contador, setContador] = useState(inital);
  
    const countAdd = () =>{
        contador < stock ? setContador(contador+1): alert('Supera el stock')
    }

    const countRest = () =>{
        contador > inital ? setContador(contador-1) : alert('Minimo de stock')
    }

 

    return (
       
        <div className="card-control">
            <div className="btn-container">
                
                <button  className="btn btn-success btn-block" onClick={() => countAdd()}>+</button>
                <input className="Item-count" readOnly disabled value={contador}></input>
                <button  className="btn btn-danger btn-block" onClick={() => countRest()}>-</button>
            </div>
            
           
            <div className="add-container">
                {contador >= 1 && <button className="btn btn-warning" onClick={() =>onAdd(contador)} disabled= {btnState}>Add {contador}</button>}
            </div> 
            
        </div>
          
        
    )
}

export default Count
