import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";

const Header = () =>{
    const online = useOnlineStatus();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const userName = useContext(userContext);
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
                    <li>Online Status : {online ? "🟢":"🔴"}</li>
                    <li><Link to ="/"  className="nav-link-items">Home</Link></li>
                    <li><Link to ="/about" className="nav-link-items">About us</Link> </li>
                    <li><Link to ="/contact" className="nav-link-items">Contact us</Link></li>
                    <li><Link to ="/instantmart" className="nav-link-items ">Instant Mart</Link></li>
                    <li>Cart </li>
                    <button id="login-btn" onClick={()=>{isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)}}>{isLoggedIn ? "Logout" : "Login"}</button>
                    <li>{isLoggedIn ? userName?.loggedInUser : ""}</li>
                </ul>

            </div>
        </div>
    )
}
export default Header;