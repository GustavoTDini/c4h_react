import Login from "./ProfileComponents/Login";
import {Route, Routes} from "react-router";
import Home from "./Home";
import {BrowserRouter} from "react-router-dom";
import About from "./About";
import Header from "./HeaderComponents/Header";
import Construction from "./Construction";
import Error from "./Error";
import Register from "./ProfileComponents/Register";
import {useState} from "react";
import Donation from "./ProfileComponents/Donation";
import Signature from "./ProfileComponents/Signature";
import Profile from "./ProfileComponents/Profile";
import Admin from "./ProfileComponents/Admin";
import Blogs from "./BlogComponents/Blogs";


function Root() {
    const [user, setUser] = useState(false)

    function handleSetUser() {
        console.log(user)
        setUser(!user);
    }

    return(
            <BrowserRouter>
                <Header user={user}/>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/login"
                        element={<Login handleSetUser={handleSetUser} />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/reports"
                        element={<Construction />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/projects"
                        element={<Construction />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/blog"
                        element={<Blogs />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/donation"
                        element={<Donation />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/signature"
                        element={<Signature />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/profile"
                        element={<Profile />}
                        errorElement={<Error/>}
                    />
                    <Route
                        path="/admin"
                        element={<Admin />}
                        errorElement={<Error/>}
                    />
                </Routes>
            </BrowserRouter>
    );

}

export default Root;
