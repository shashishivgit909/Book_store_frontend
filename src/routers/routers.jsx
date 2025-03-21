import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/book/CartPage";
import CheckoutPage from "../pages/book/CheckoutPage";
import SingleBook from "../pages/book/SingleBook";
import OrdersPage from "../pages/book/OrdersPage";
import PrivateRoute from "./PrivateRoute";
import DropdownPractice from "../components/DropdownPractice";
import Scorlbar from "../pages/Scorlbar";

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
                element: <OrdersPage />

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
            },
            {
                path: "/dropdownForm",
                element: <DropdownPractice />
            },

            {
                path: "/scrollbar",
                element: <Scorlbar />
            }

        ]
    }
]);

export default routers;