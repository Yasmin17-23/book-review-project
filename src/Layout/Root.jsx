import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";



const Root = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;