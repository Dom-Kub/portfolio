import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTE_TYPES} from "./RouteType";
import Menu from "./Menu";
import Home from "./component/Pages/Home";
import Experience from "./component/Pages/Experience";
import AboutMe from "./component/Pages/AboutMe";
import Hobbies from "./component/Pages/Hobbies";
import DefaultPage from "./component/Pages/DefaulPage";

const AppRoutes = () => {
return(
    <BrowserRouter>
    <Routes>
        <Route path={ROUTE_TYPES.SLASH} element={<Menu/>}>
          <Route path={ROUTE_TYPES.HOME} element={<DefaultPage/>}/>
            <Route path={ROUTE_TYPES.EXPERIENCE} element={<Experience/>}/>
            <Route path={ROUTE_TYPES.ABOUT_ME} element={<AboutMe/>}/>
            <Route path={ROUTE_TYPES.HOBBIES} element={<Hobbies/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
)
}
export default AppRoutes