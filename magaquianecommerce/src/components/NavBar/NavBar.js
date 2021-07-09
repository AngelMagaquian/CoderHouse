import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/cartWidget';
import { NavLink } from 'react-router-dom';

const NavBar2 = () => {
    return (

            <nav className="navbar navbar-expand-lg ">
                
                <NavLink activeClassName="nav-link:hover" exact to="/t">
                    <a className="navbar-brand" href="#">Angel Magaquian E-Commerce</a>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <NavLink activeClassName="nav-link:hover" exact to="/">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </NavLink> */}
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink activeClassName="selected" to={'/category/1'}>
                                <a className="dropdown-item" href="#">Mouse</a>
                            </NavLink>
                            <NavLink activeClassName="selected" to={'/category/2'}>
                                <a className="dropdown-item" href="#">Monitor</a>
                            </NavLink>

                            
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        
                        <NavLink  activeClassName="selected" to={'/Cart/'}>
                            <a className="nav-link disabled" href="#">Cart</a>
                        </NavLink>
                    </li>
                    </ul>
                    <CartWidget/>
                </div>
            </nav>
    )
}

export default NavBar2
