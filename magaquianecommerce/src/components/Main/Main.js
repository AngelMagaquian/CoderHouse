import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';






function Main(){
    return(
        <div className="App">
            <header className="App-header">
                <NavBar/>
                <ItemListContainer title="Items List"/>
            </header>
           
        </div>
    );
}

export default Main;



