import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutUs from "./src/Components/AboutUs";
import ContactUs from "./src/Components/ContactUs";
import Error from "./src/Components/Error";


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

const appRouter = createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLayout/>,
            errorElement: <Error />
        },
        {
            path:'/aboutus',
            element:<AboutUs />
        },
        {
            path:'/contactus',
            element:<ContactUs />
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)