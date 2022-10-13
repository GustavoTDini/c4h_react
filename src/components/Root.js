
import Login from "./Login";
import {Router, RouterProvider} from "react-router";
import Home from "./Home";
import {createBrowserRouter} from "react-router-dom";
import About from "./About";
import Header from "./Header";

const router = createBrowserRouter([
    {
        path: "/",
        element:<>
            <Header/>
            <Home/>
        </>
        ,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/about",
        element: <>
            <Header/>
            <About/>
        </>,
    },
]);

function Root() {
    return(<div>
            <RouterProvider router={router}/>
        </div>
    );

}

export default Root;
