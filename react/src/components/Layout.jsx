import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { TokenContext } from "../App";
import authService from "../services/authService";

function Layout () {
    const { token, setToken } = useContext(TokenContext)

    async function checkTokenOnRender() {
        const status = await authService.validateToken(token)
        console.log(status)
        if (status === 401) {
            localStorage.removeItem(token)
            setToken(null)
        }
    }

    useEffect(() => {checkTokenOnRender()}, []);

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="pt-24">
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;