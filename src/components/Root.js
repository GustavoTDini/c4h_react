import Login from "./ProfileComponents/Login";
import {Route, Routes} from "react-router";
import Home from "./Home";
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import About from "./About";
import Header from "./HeaderComponents/Header";
import Construction from "./Construction";
import Error from "./Error";
import Register from "./ProfileComponents/Register";
import Donation from "./ProfileComponents/Donation";
import Signature from "./ProfileComponents/Signature";
import Profile from "./ProfileComponents/Profile";
import Admin from "./AdminComponents/Admin";
import Blogs from "./BlogComponents/Blogs";
import AddBlog from "./AdminComponents/AddBlog";
import BlogDetail from "./BlogComponents/BlogDetail";
import {tokenKey} from "../utilities/apiHelpers";


function Root() {
    const [user, setUser] = useState(localStorage.getItem(tokenKey)!== null)

    function handleSetUser(logged) {
        setUser(logged)
    }

    useEffect(()=>{
        setUser(localStorage.getItem(tokenKey)!== null)
    })

    return(
        <React.StrictMode>
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
                         path="/blogs"
                         element={<Blogs/>}
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
                         element={<Profile handleSetUser={handleSetUser} />}
                         errorElement={<Error/>}
                     />
                     <Route
                         path="/admin"
                         element={<Admin />}
                         errorElement={<Error/>}
                     />
                     <Route
                         path="/addBlog"
                         element={<AddBlog />}
                         errorElement={<Error/>}
                     />
                     <Route
                         path="/blog/:id"
                         element={<BlogDetail />}
                         errorElement={<Error/>}
                     />
                 </Routes>
             </BrowserRouter>
        </React.StrictMode>
    );
}

export default Root;
