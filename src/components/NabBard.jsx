import { NavLink } from "react-router-dom";
const NabBard = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Product">Product</NavLink>
    </div>
  )
}

export default NabBard;