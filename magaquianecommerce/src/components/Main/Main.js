import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';






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
                    <Route exact path='/'>    
                        <ItemListContainer title="Items List"/>
                    </Route>
                    <Route path='/ItemDetail'>
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}

export default Main;



