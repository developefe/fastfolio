import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Templates from "./pages/Templates";
import Landing from "./pages/home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import  "./index.scss";

function App() {
    return(
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/templates" element={<Templates />} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App