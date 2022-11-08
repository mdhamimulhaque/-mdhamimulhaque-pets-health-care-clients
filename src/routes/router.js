import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

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
                loader: () => fetch(`http://localhost:5000/services`),
                element: <Services />
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }

        ]
    }
])

export default router;