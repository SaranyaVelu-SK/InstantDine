import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <div style={{
                display:"flex",alignItems:"center"
            }
        }>
            <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/09/21/Food-Logo-Graphics-5583096-1-1-580x386.jpg"></img>
            <p style={{color:"orangered",fontSize:"30px",fontWeight:"bold"}}>INSTANT DINE</p>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to ="/"  className="nav-link-items">Home</Link></li>
                    <li><Link to ="/about" className="nav-link-items">About us</Link> </li>
                    <li><Link to ="/contact" className="nav-link-items">Contact us</Link></li>
                    <li>Cart </li>
                    <button id="login-btn" onClick={()=>{isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)}}>{isLoggedIn ? "Logout" : "Login"}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;