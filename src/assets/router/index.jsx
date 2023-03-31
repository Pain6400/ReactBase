import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "product",
        element: <Product />
    }
]);