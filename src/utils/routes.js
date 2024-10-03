import { USERS_ROUTE } from "./consts";
import UsersPage from "../pages/UsersPage/UsersPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export const publicRoutes = [
    {
        path: USERS_ROUTE,
        element: <UsersPage />,
    },
    {
        path: USERS_ROUTE + "/:user_id",
        element: <ProfilePage />,
    },
];