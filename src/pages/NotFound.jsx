import { useRouteError, Link } from "react-router-dom"

const NotFound = () => {
  const error = useRouteError();
   
    return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>{error.statusText || error.message}</p>
          <Link to="/">Volver al Home</Link>
        </div>
    )
}

export default NotFound;