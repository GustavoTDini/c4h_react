
import Login from "./Login";
import {Router, RouterProvider} from "react-router";
import Home from "./Home";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

function Root() {
    return(<div>
            <RouterProvider router={router}/>
        </div>
    );

}

export default Root;
