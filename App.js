import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./src/Components/AboutUs";
import ContactUs from "./src/Components/ContactUs";
import Error from "./src/Components/Error";
import RestaurantMain from "./src/Components/RestaurantMain";


const something = React.createElement("p",{"color":"Blue"},"Something Rendered");
const AppLayout = () =>{
    return (
        <div>
            <Header/>
            <Outlet />
            {/* <Footer/> */}
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Body />
                },
                {
                    path:'/about',
                    element:<AboutUs />
                },
                {
                    path:'/contact',
                    element:<ContactUs />
                },
                {
                    path:'/restaurant/:resId',
                    element:<RestaurantMain />
                }
            ],
            errorElement: <Error />
        },
        
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)