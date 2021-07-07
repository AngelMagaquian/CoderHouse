import React, { useContext, useState, useEffect } from 'react';
import cartContext from '../../context/cartContext.js';
import CartDetail from '../CartDetail/CartDetail.js';

function CartItem() {
    const [Items, setItems] = useState([]);
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


    return (
      
        <tr>
            {
                Items.map(item=>{
                    return <CartDetail props={item}/>
                })
            }
        </tr>
      
    )
}

export default CartItem
