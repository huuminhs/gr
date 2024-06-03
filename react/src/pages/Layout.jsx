import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect } from "react";
import { TokenContext } from "../App";
import { jwtDecode } from "jwt-decode"

function Layout () {
    const { token, setToken } = useContext(TokenContext)
    const location = useLocation()

    async function checkTokenOnRender() {
        if (token !== null) {
            const decoded = jwtDecode(token)
            const exp_date = new Date(decoded.exp * 1000)
            if (exp_date <= new Date()) {
                setToken(null)
            }
        }
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