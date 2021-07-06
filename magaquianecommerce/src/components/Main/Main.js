import './Main.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import cartContext from '../../context/cartContext';
import CacheProvider from '../../providers/cacheProvider';



function Main(){
  
    return(
        <CacheProvider>
            <div className="App">
                <BrowserRouter>
                    <header className="App-header">
                        <NavBar/>
                        <Route path='/:id'>    
                            <ItemListContainer title="Items List"/>
                        </Route>
                    </header> 
                    <Switch>
                        <Route path='/category/:id'>    
                            <ItemListContainer title="Items List"/>
                        </Route>
                        
                        <Route path='/ItemDetail/:id'>
                            <ItemDetailContainer/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path='/'>    
                            <ItemListContainer title="Items List"/>
                        </Route>
                    </Switch>

                    <Switch>
                        <Route path='/Cart/'>    
                            <Cart title="Cart"/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </CacheProvider>
  
        
        
    );
}

export default Main;



