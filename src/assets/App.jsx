
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Logo from "./images/LogoAmazon.png"
import { Routes, Route } from "react-router-dom";
const App = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

  export default App;
