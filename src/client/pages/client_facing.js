import React from "react";
import Header from "../components/header.js";

export default function Client_Facing() {
    return(
        <section id="client_facing">
            <div id="header_container">
                <Header />
            </div>
            <div id="content_container"></div>
            <div id="footer_container"></div>
        </section>
    )
};