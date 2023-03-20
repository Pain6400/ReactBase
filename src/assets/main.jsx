import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import Root from "./components/Root";
import ErrorPage from './components/error_page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
