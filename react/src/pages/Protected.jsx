import { useContext } from "react";
import { TokenContext } from "../App";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Protected() {
    const { token, setToken } = useContext(TokenContext)

    return (
        token? <Outlet/> : <Navigate to='/dang-nhap'/>
    );
}