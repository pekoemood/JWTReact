import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import ErrorPage from "../pages/Error/ErrorPage";
import Profile, { profileLoader } from "../pages/Profile/Profile";
import Logout from "../pages/Logout/Logout";

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
      {
        path: 'profile',
        element: <Profile />,
        loader: profileLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ]
  },
])

export default routes;