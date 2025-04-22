import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


const something = React.createElement("p",{"color":"Blue"},"Something Rendered");
const AppLayout = () =>{
    return (
        <div>
            <Header/>
            <Body/>
            {/* <Footer/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)