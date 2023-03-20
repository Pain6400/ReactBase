import { Outlet } from "react-router-dom";
import NabBard from "./NabBard";

const Layout = () => {
  return (
    <div>
        <h1>Welcome to my first proyect</h1>
        <NabBard />
        <Outlet />
    </div>
  )
}
export default Layout;