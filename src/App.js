import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./utils/routes";
import Navbar from "./components/Navbar/Navbar";
import { USERS_ROUTE } from "./utils/consts";

const router = createBrowserRouter([
  {
    path: USERS_ROUTE,
    element: <Navbar />,
    errorElement: <div><h2>Страница не существует</h2><Link to={USERS_ROUTE}>Перейти на главную страницу</Link></div>,
    children: publicRoutes?.map(pubRoute => ({
      path: pubRoute.path,
      element: pubRoute.element,
    }))
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
