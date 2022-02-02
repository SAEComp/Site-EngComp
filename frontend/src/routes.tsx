import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Notas from "./pages/Notas de Corte";
import Enfases from "./pages/Enfases";
import Equivalencias from "./pages/Equivalências";
import Extracurriculares from "./pages/Extracurriculares";
import ManualBixo from "./pages/Manual-Bixo";
import FAQ from "./pages/Tutoriais-FAQ";

const _Routes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home/> } path="/"  />
                <Route element = { <Notas/> }  path="/Notas-Corte" />
                <Route element = { <Enfases/> }  path="/Enfases"  />
                <Route element = { <Equivalencias/> }  path="/Equivalencias"  />
                <Route element = { <Extracurriculares/> }  path="/Extracurriculares"  />
                <Route element = { <ManualBixo/> }  path="/Manual-Bixo"  />
                <Route element = { <FAQ/> }  path="/FAQ"  />
            </Routes>
            
       </BrowserRouter>
   )
}

export default _Routes;