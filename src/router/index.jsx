import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import ProductDetail from "../components/Product/ProductDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "product/:id",
                element: <ProductDetail />
            }
        ]
    }
]);