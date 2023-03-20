import { Outlet } from "react-router-dom";
import NabBard from "./NabBard";

const Layout = () => {
  return (
    <div>
        <NabBard />
        <Outlet />
    </div>
  )
}
export default Layout;