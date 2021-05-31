import './NavBar.css';
import logo from '../../assets/icons/logo.svg';

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navLogo">
                <img alt ="logo" className="navbar-brand" width="90" height="90" src={logo}/>
            </div>

            <a href="#" className="navSection">Seccion 1</a>
                    
            <a href="#" className="navSection">Seccion 2</a>
                        
            <a href="#" className="navSection">Seccion 3</a> 
        
            
        </nav>
    );
}

export default NavBar;