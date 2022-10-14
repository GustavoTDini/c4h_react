
import Login from "./ProfileComponents/Login";
import {Router, RouterProvider} from "react-router";
import Home from "./Home";
import {createBrowserRouter} from "react-router-dom";
import About from "./About";
import Header from "./HeaderComponents/Header";
import Construction from "./Construction";
import Error from "./Error";
import {Container} from "react-bootstrap";
import Register from "./ProfileComponents/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element:<>
            <Header/>
            <Home/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
    {
        path: "/login",
        element:<>
            <Header/>
            <Login/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
    {
        path: "/about",
        element:<>
            <Header/>
            <About/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
    {
        path: "/projects",
        element:<>
            <Header/>
            <Construction/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
    {
        path: "/blog",
        element:<>
            <Header/>
            <Construction/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
    {
        path: "/reports",
        element:<>
            <Header/>
            <Construction/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
    {
        path: "/register",
        element:<>
            <Header/>
            <Register/>
        </>,
        errorElement:<>
            <Header/>
            <Error/>
        </>
    },
]);

function Root() {
    return(<div>
            <RouterProvider router={router}/>
        </div>
    );

}

export default Root;
