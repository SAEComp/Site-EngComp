import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Notas from "./pages/Notas";
import Enfases from "./pages/Enfases";
import Equivalencias from "./pages/Equivalências";
import Extracurriculares from "./pages/Extracurriculares";
import Manual from "./pages/Manual-Bixo";
import FAQ from "./pages/Tutoriais-FAQ";
import SAEcomp from "./pages/SAEComp";
import Login from "./pages/Login";
import TeacherFeedback from "./pages/TeacherFeedback";
import TeacherFeedbackResults from "./pages/TeacherFeedbackResults";
import Default from "./pages/Default";
import Test from "./pages/Test/Test";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Notas />} path="/Notas" />
                <Route element={<Enfases />} path="/Enfases" />
                <Route element={<Equivalencias />} path="/Equivalencias" />
                <Route element={<Extracurriculares />} path="/Extracurriculares" />
                <Route element={<Manual />} path="/Manual-Bixo" />
                <Route element={<SAEcomp />} path="/SAEComp" />
                <Route element={<Login />} path="/Login" />
                <Route element={<FAQ />} path="/FAQ" />
                <Route element={<TeacherFeedback />} path="/Avaliacao" />
                <Route element={<TeacherFeedbackResults />} path="/Resultados" />
                <Route element={<Default />} path="/Default" />
                <Route element={<Test />} path="/test" />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;
