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
import { FaSadCry } from "react-icons/fa";
import MyAppointment from "../../Pages/Shared/MyAppointment/MyAppointment";
import AddAppointment from "../../Pages/Shared/MyAppointment/AddAppointment/AddAppointment";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/services/services"),
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>,
                loader: () => fetch("http://localhost:5000/services/allServices"),
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/services/${params.id}`),
            },
            {
                path: "/addReview",
                element: (
                    <PrivateRoutes>
                        <AddReview />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/myReviews",
                element: (
                    <PrivateRoutes>
                        <MyReviews />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/addAppointment",
                element: (
                    <PrivateRoutes>
                        <AddAppointment />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/myAppointment",
                element: (
                    <PrivateRoutes>
                        <MyAppointment />
                    </PrivateRoutes>
                ),
            },
            {
                path: "*",
                element: (
                    <div className="flex flex-col justify-center items-center my-5">
                        <p className="text-xl font-bold">Page Not Found</p>
                        <p>
                            <FaSadCry className="m-3 w-10 h-10" />
                        </p>
                    </div>
                ),
            },
        ],
    },
]);

export default router;
