import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./src/Components/AboutUs";
import ContactUs from "./src/Components/ContactUs";
import Error from "./src/Components/Error";
import RestaurantMain from "./src/Components/RestaurantMain";
import userContext from "./utils/userContext";


const something = React.createElement("p",{"color":"Blue"},"Something Rendered");
const AppLayout = () =>{
    return (
        <div>
            <userContext.Provider value={{loggedInUser:"saranya"}}>
                <Header/>
            </userContext.Provider>
            
            <Outlet />
        </div>
    )
}

const InstantMart = lazy(() => import('./src/Components/InstantMart'));

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
                },
                {
                    path:'/instantmart',
                    element:<Suspense fallback={<h1>just a minute..........</h1>}><InstantMart /></Suspense>
                }
            ],
            errorElement: <Error />
        },
        
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)