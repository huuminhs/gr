import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timeline from "./pages/Timeline";
import ComposePost from './pages/ComposePost'
import Layout from "./pages/Layout";
import "./index.css"
import ViewPostById from "./pages/ViewPostById";
import { SignIn } from "./pages/SignIn";
import { createContext, useState } from "react";
import Protected from "./pages/Protected";
import Auth from "./pages/Auth";
import { SignUp } from "./pages/SignUp";

export const TokenContext = createContext();

export default function App() {
    const [token, _setToken] = useState(localStorage.getItem("token"))

    function setToken (tkn) {
        if (tkn === null)
            localStorage.removeItem("token")
        else
            localStorage.setItem("token", tkn)
        _setToken(tkn);
    }

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        {/* Private route (require signing in) */}
                        <Route path='/protected' element={<Protected/>}>
                            <Route path="dang-bai" element={<ComposePost/>}/>
                        </Route>
                        {/* Auth routes */}
                        <Route path='/auth' element={<Auth/>}>
                            <Route path="dang-nhap" element={<SignIn/>}/>
                            <Route path="dang-ky" element={<SignUp/>}/>
                        </Route>
                        {/* Public routes */}
                        <Route path="danh-sach-bai-dang" element={<Timeline/>}/>
                        <Route path="bai-dang/:id" element={<ViewPostById/>}/>
                    </Route>
                    <Route path='*' element={<>404 ERROR</>}/>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    );
}