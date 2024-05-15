import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import ComposePost from './components/ComposePost'
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout/>}>
                    <Route path="danh-sach-bai-dang" element={Timeline}/>
                    <Route path="dang-bai" element={<ComposePost/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;