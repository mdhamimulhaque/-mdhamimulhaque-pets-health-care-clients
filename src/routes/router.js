import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
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
                element: <Services />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }

        ]
    }
])

export default router;