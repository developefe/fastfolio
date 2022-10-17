import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Templates from "./pages/Templates";

function App() {
    return(
        <div>
            <Routes>
                <Route path="templates" element={<Templates />} />
            </Routes>
        </div>
    )
}

export default App