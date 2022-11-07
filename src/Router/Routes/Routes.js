import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SingUp from "../../Pages/Login/SignUP/SignUP";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SingUp></SingUp>,
            },
        ],
    },
]);

export default router;
