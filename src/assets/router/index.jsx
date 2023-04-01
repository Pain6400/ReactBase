import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />
    },
    {
        path: "product",
        element: <Product />,
        errorElement: <NotFound />
    }
]);