import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout () {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="pt-16">
                <Outlet/>
            </div>

        </div>
    );
}

export default Layout;