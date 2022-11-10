import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                loader: () => fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/services`),
                element: <Services />
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/services/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/blogs',
                loader: () => fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/blogs`),
                element: <Blogs />
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/update-review/:id',
                loader: ({ params }) => fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/my-reviews/${params.id}`),
                element: <PrivateRoute><UpdateReview /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            }

        ]
    }
])

export default router;