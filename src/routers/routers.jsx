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
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import AdminLogin from "../components/AdminLogin";
import AdminRoute from "./AdminRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import A from "../components/nestedRoutePractice/A";
import B from "../components/nestedRoutePractice/B";
import C1 from "../components/nestedRoutePractice/C1";
import C2 from "../components/nestedRoutePractice/C2";
import D from "../components/nestedRoutePractice/D";
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
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },

    {
        path: "/dashboard",
        element: <AdminRoute>
            <DashboardLayout />
        </AdminRoute>,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "add-new-book",
                element: <div>Add new book</div>
            },
            {
                path: "edit-book/:id",
                element: <div>Edit book</div>
            },
            {
                path: "manage-books",
                element: <div>Manage Books</div>
            },
        ]
    },


    //for below route object: for route:1.  http://localhost:5173/a/b/c/d  op: insideA
    // inside b
    // inside C2
    // inside D

    // 2.  http://localhost:5173/a/b/c   , op: insideA
    // inside b
    // inside C2   and  so on : 

    // 3. for   http://localhost:5173/c , will so 404 error
    {
        path: "/a",
        element: <A />, // ✅ Must have <Outlet />
        children: [
            {
                path: "b",
                element: <B />, // ✅ Must have <Outlet />
                children: [
                    { path: "", element: <C1 /> }, // /dashboard/books
                    {
                        path: "c",
                        element: <C2 />, // ✅ Must have <Outlet />
                        children: [
                            { path: "d", element: <D /> } // /dashboard/books/123/edit
                        ]
                    }
                ]
            }
        ]
    }
]);

export default routers;