import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout () {
    return (
        <div>
            <div className="mb-2">
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
}

export default Layout;