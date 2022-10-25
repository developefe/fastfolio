import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Templates from "./pages/Templates";
import Landing from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Theme1 from "./themes/theme-1/Theme1";
import  "./index.scss";

function App() {
    return(
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/theme1" element={<Theme1 />} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App