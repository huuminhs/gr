import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect } from "react";
import { TokenContext } from "../App";
import authService from "../services/authService";

function Layout () {
    const { token, setToken } = useContext(TokenContext)
    const location = useLocation()

    async function checkTokenOnRender() {
        const status = await authService.isTokenExpired(token)
        console.log(status)
        if (status === 401)
            setToken(null)
    }

    useEffect(() => {checkTokenOnRender()}, [location]);

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="pt-20 md:pt-24">
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;