
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Logo from "./images/LogoAmazon.png"
import { Link } from "react-router-dom";
const App = () => {

  return (
    <div className="container mx-auto">
      <nav className="bg-gray-100 flex grap-4">
        <Link to="/Home"><span>Home</span></Link>
        <Link to="/Contact"><span>Contact</span></Link>
        <Link to="/About"><span>About</span></Link>
      </nav>
    </div>
  )
}

  export default App
