import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Templates from "./pages/Templates";
import Landing from "./pages/Landing";
import Header from "./components/Header/Header";

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
        </>
    )
}

export default App