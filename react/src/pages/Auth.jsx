import { useContext } from "react";
import { TokenContext } from "../App";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Auth() {
    const { token, setToken } = useContext(TokenContext)

    return (
        token? <Navigate to='/'/> : <Outlet/>
    );
}