import React from 'react'
import { IoIosLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Navbar({navData}) {
    return (
        <div>

            <nav className="navbar">
                <div className="container">
                    <div className="navs">
                        <NavLink  to={'/'}><h1 className="navbar-brand">LA COLLECTION</h1> </NavLink>

                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="form-nav">
                            <button className="nav-btn" type="submit"><IoIosLogIn /> Login</button>
                            <button className="nav-btn" type="submit"><FaUserPlus/> Register</button>
                            <NavLink to="/cart"><button className="nav-btn" type="submit"><FaCartShopping/> Cart({navData.length})</button></NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar