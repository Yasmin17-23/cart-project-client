import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MyCartProduct from "../pages/MyCartProduct/MyCartProduct";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/CheckOut/Checkout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCartProduct></MyCartProduct></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            }
        ]
    }
])

export default router