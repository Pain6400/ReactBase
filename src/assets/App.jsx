
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product"
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetail from "./components/Product/ProductDetail";
import ErrorPage from "./components/error_page";
const App = () => {

  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="About" element={<About />}/>
            <Route path="Contact" element={<Contact />}/>
            <Route path="Product">
              <Route index element={<Product />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

  export default App;
