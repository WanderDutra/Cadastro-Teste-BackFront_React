import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Pages/Home/index'
import Users from './Pages/Users/index'

function Routess() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/usuarios" Component={Users} />
            </Routes>
        </BrowserRouter>



    )


}
export default Routess