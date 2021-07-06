import React, { useContext, useState, useEffect } from 'react';
import cartContext from '../../context/cartContext.js';
import CartDetail from '../CartDetail/CartDetail.js';

function CartItem() {
    const [Items, setItems] = useState(0);
    const { getCache } = useContext(cartContext);

    useEffect(()=>{
        const promise = new Promise ((resolve, reject) =>{
            resolve(getCache())
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


    console.log(Items);
    return (
        <div>
            {
                /* Items.map(item=>{
                   // <CartDetail id={item.id} name={item.name} desc={item.desc} cant={item.cant} price={item.price}/>
                }) */
            }
            
        </div>
    )
}

export default CartItem
