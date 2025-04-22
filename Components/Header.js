const Header = () =>{
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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart </li>
                </ul>

            </div>
        </div>
    )
}
export default Header;