import React from "react";
import "./index.css";

import Navigation from "../navigation/index.js";

export default function Header() {
    return(
        <section id="header_elements">
            <div id="navigation_element">
                <Navigation />
            </div>
        </section>
    )
};