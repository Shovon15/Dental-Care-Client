import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SingUp from "../../Pages/Login/SignUP/SignUP";
import AddServices from "../../Pages/Services/AddServices/AddServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import AllServices from "../../Pages/Services/AllServices/AllServices";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddReview from "../../Pages/Shared/Review/AddReview/AddReview";
import MyReviews from "../../Pages/Shared/Review/MyReviews/MyReviews";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/services"),
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>,
                loader: () => fetch("http://localhost:5000/allServices"),
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
            {
                path: "/addService",
                element: (
                    <PrivateRoutes>
                        <AddServices />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/service/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/addReview",
                element: (
                    <PrivateRoutes>
                        <AddReview />
                    </PrivateRoutes>
                ),
                // loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/myReviews",
                element: (
                    <PrivateRoutes>
                        <MyReviews />
                    </PrivateRoutes>
                ),
                // loader: ({ params }) => fetch(`http://localhost:5000/myReviews?email=${user?.email}`),
            },
        ],
    },
]);

export default router;
