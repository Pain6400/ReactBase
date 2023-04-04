import { createBrowserRouter, Navigate } from "react-router-dom";

// layouts
import DashboardLayout from '../layout/dashboard';
import SimpleLayout from '../layout/simple';
//
import BlogPage from '../pages/BlogPage';
import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import ProductsPage from '../pages/ProductsPage';
import DashboardAppPage from '../pages/DashboardAppPage';
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import ProductDetail from "../components/Product/ProductDetail";

export const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { element: <Navigate to="/dashboard/app" />, index: true },
          { path: 'app', element: <DashboardAppPage /> },
          { path: 'user', element: <UserPage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'blog', element: <BlogPage /> },
        ],
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        element: <SimpleLayout />,
        children: [
          { element: <Navigate to="/dashboard/app" />, index: true },
          { path: '404', element: <Page404 /> },
          { path: '*', element: <Navigate to="/404" /> },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
]);