import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error";
import Home from "./pages/home";
import CreatePost from "./pages/post";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myphotos";
import Signup from "./pages/signup";
import ProtectedRoutes from "./components/ProtectedRoutes";

export const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children: [  // Corrected syntax here
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />
            },
            {
                path: "/post",
                element: <CreatePost />,
                errorElement: <Error />
            },
            {
                path: "/profile",
                element: <Profile />,
                errorElement: <Error />
            },
            {
                path: "/myphotos",
                element: <MyPhotos />,
                errorElement: <Error />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />
    }
]);

export default router;
