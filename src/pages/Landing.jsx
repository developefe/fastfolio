import React from "react";
import { Link } from "react-router-dom";
import LandingEntry from "../components/Landing-Entry/LandingEntry";

export default function Landing() {
    return(
        <div>
            <LandingEntry/>
            {/* <Link to="/templates">Templates</Link> */}
        </div>
    )
}