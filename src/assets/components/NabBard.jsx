import { Link } from "react-router-dom";

const NabBard = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Product">Product</Link>
    </div>
  )
}

export default NabBard;