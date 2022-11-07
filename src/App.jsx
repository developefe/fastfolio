import React from "react";
import { Link, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Templates from "./pages/Templates";
import Landing from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Theme1 from "./themes/theme-1/Theme1";
import  "./index.scss";

function App() {

    return(
        <>
            {window.location.pathname !== "/theme1" ? ( <Header /> ) : null}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/theme1" element={<Theme1 />} />
                </Routes>
            </BrowserRouter>
            {window.location.pathname !== "/theme1" ? ( <Footer /> ) : null}
        </>
    )
}

export default App