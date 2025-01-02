import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const routers=createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"",
            element:<Home/>

        },
        {
            path:"/orders",
            element:<h1>Orders</h1>

        },
        {
            path:"/about",
            element:<h1>About</h1>

        }

    ]
}
]);

export default routers;