import { Link } from "react-router-dom";
import Logo from "../images/LogoAmazon.png"
const NabBard = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="" />
        <Link to="/">Home</Link>
        <Link to="/Collection">Collection</Link>
        <Link to="/Men">Men</Link>
        <Link to="/Women">Women</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Product">Product</Link>
      </header>
    </div>
  )
}

export default NabBard;