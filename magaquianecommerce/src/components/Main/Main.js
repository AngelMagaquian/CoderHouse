import './Main.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'





/* function Main(){
    return(
        <div className="App">
            <header className="App-header">
                <NavBar/>
            </header>          
                <ItemListContainer title="Items List"/>
                <ItemDetailContainer/>
        </div>
    );
} */

function Main(){
    return(
        <div className="App">
            <BrowserRouter>
                <header className="App-header">
                    <NavBar/>
                </header> 
                <Switch>
                    <Route path='/category/:id'>    
                        <ItemListContainer title="Items List"/>
                    </Route>
                    <Route path='/ItemDetail/:id'>
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}

export default Main;



