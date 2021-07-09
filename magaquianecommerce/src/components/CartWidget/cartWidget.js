import React  ,{ useContext } from 'react';
import './cartWidget.css'; 
import cartPlus from '../../assets/icons/cart-plus.svg';
import CartContext from '../../context/cartContext';

/* import "bootstrap/dist/css/bootstrap.min.css"; */

function CartWidget(){
    //const [CartItem, setCartItems] = useState([]);
    const {cacheSize} = useContext(CartContext);
    let number = cacheSize;
  /*   useEffect(()=>{
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
    }, []); */

    


    return(
        <div className="cart-Widget">
            <button className="button-cartWidget">
                <svg xmlns={cartPlus} width="25" height="25" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <label className="label-number">{number}</label>
            </button>
            
        </div>  
       
    );
}

export default CartWidget;