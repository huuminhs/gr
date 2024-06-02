import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timeline from "./pages/Timeline";
import ComposePost from './pages/ComposePost'
import Layout from "./pages/Layout";
import "./index.css"
import ViewPostById from "./pages/ViewPostById";
import { SignIn } from "./pages/SignIn";
import { createContext, useState } from "react";

export const TokenContext = createContext();

export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"))

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="dang-nhap" element={<SignIn/>}/>
                        <Route path="danh-sach-bai-dang" element={<Timeline/>}/>
                        <Route path="dang-bai" element={<ComposePost/>}/>
                        <Route path="bai-dang/:id" element={<ViewPostById/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    );
}