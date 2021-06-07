import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';






function Main(){
    return(
        <div className="App">
            <header className="App-header">
                <NavBar/>
                
            </header>
            <body>
                <ItemListContainer title="Items List"/>
            </body>
            
           
        </div>
    );
}

export default Main;



