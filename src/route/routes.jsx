import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import ErrorPage from "../pages/Error/ErrorPage";

const routes = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'createAccount',
        element:<CreateAccount />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ]
  },
])

export default routes;