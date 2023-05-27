import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Notas from "./pages/Notas de Corte";
import Enfases from "./pages/Enfases";
import Equivalencias from "./pages/Equivalências";
import Extracurriculares from "./pages/Extracurriculares";
import Manual from "./pages/Manual-Bixo";
import FAQ from "./pages/Tutoriais-FAQ";
import SAEcomp from "./pages/SAEComp";
import Login from "./pages/Login";
import Default from "./pages/Default";
import { Navigate } from "react-router-dom";

//@ts-ignore
const PrivateRoute = ({children, redirectTo}) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    console.log("isAuth: ", isAuthenticated);
    return isAuthenticated ? children : <Navigate to = {redirectTo}/>
};

const _Routes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home/> } path="/"  />
                <Route element = { <Notas/> }  path="/Notas-Corte" />
                <Route element = { <Enfases/> }  path="/Enfases"  />
                <Route element = { <Equivalencias/> }  path="/Equivalencias"  />
                <Route element = { <Extracurriculares/> }  path="/Extracurriculares"  />
                <Route element = { <PrivateRoute redirectTo = "/Login"><Manual /></PrivateRoute> }  path="/Manual-Bixo"  />
                <Route element = { <SAEcomp/> }  path="/SAEComp"  />
                <Route element = { <Login/> }  path="/Login"  />
                <Route element = { <FAQ/> }  path="/FAQ"  />
                <Route element = { <Default/> }  path="/Default"  />
            </Routes>
            
       </BrowserRouter>
   )
}

export default _Routes;
