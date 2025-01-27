import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/book/CartPage";
import CheckoutPage from "../pages/book/CheckoutPage";
import SingleBook from "../pages/book/SingleBook";
import PrivateRoute from "./PrivateRoute";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />

            },
            {
                path: "/orders",
                element: <h1>Orders</h1>

            },
            {
                path: "/about",
                element: <h1>About</h1>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element:
                    <PrivateRoute>
                        <CheckoutPage />
                    </PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            }

        ]
    }
]);

export default routers;