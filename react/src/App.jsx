import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import ComposePost from './components/ComposePost'
import Layout from "./components/Layout";
import "./index.css"
import ViewPostById from "./pages/ViewPostById";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="danh-sach-bai-dang" element={<div><Timeline/></div>}/>
                    <Route path="dang-bai" element={<ComposePost/>}/>
                    <Route path="bai-dang/:id" element={<ViewPostById/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;