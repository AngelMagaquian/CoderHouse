import React , { useState } from 'react'
import './Count.css';

function Count(stock) {
    const [contador, setContador] = useState(0);
    console.log();
    return (
        <div className="card-control">
            <button  className="btn btn-danger btn-block" onClick={() => {setContador(contador - 1);}}>-</button>
            <input className="Item-count" readOnly disabled value={contador}></input>
            <button  className="btn btn-success btn-block" onClick={() => {setContador(contador + 1);}}>+</button>
        </div>
    )
}

export default Count
