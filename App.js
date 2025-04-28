import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";


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