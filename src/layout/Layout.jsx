import { Outlet, useNavigation } from "react-router-dom";
import NabBard from "../components/NabBard";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
        <NabBard />
        <main>
          {
            navigation.state === "loading" && (
              <h1>Loading.....</h1>
            )
          }
          <Outlet />
        </main>
        <footer>footer</footer>
    </div>
  )
}
export default Layout;