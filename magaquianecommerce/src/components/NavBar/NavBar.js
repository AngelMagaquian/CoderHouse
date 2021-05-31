import './NavBar.css'; 
import logo from '../../assets/icons/logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(){
    return(
        
        <nav className="navbar">
            <div className="navLogo">
                <img alt ="logo" className="navbar-brand"  src={logo}/>
            </div>
            <div className="navBrand">
                <p>Magaquian E-commerce</p>
            </div>
            <ul>
                <li><a href="#" className="navSection">Home</a></li>
                <li><a href="#" className="navSection">Products</a></li>
                <li><a href="#" className="navSection">Services</a></li>
                <li><a href="#" className="navSection">About</a></li>
                <li><a href="#" className="navSection">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;