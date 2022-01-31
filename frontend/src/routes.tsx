import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Notas from "./pages/Notas de Corte";
import Enfases from "./pages/Enfases";
import Equivalencias from "./pages/Equivâlencias";
import Extras from "./pages/Extracurriculares";
import ManualBixo from "./pages/Manual-Bixo";
import FAQ from "./pages/Tutoriais-FAQ";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Notas }  path="/Notas-Corte" exact />
           <Route component = { Enfases }  path="/Enfases" exact />
           <Route component = { Equivalencias }  path="/Equivalencias" exact />
           <Route component = { Extras }  path="/Extracurriculares" exact />
           <Route component = { ManualBixo }  path="/Manual-Bixo" exact />
           <Route component = { FAQ }  path="/FAQ" exact />
           
       </BrowserRouter>
   )
}

export default Routes;