import { Outlet, useNavigation } from "react-router-dom";
import NabBard from "../components/NabBard";
import { Container } from "@mui/material";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
        <NabBard />
        <Container maxWidth="md" sx={{ pb: 2}}>
          {
            navigation.state === "loading" && (
              <h1>Loading.....</h1>
            )
          }
          <Outlet />
        </Container>
        <footer>footer</footer>
    </div>
  )
}
export default Layout;