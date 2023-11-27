import React from "react";
import Header from "../components/header/index.js";
import Content from "../components/content/index.js";
import Footer from "../components/footer/index.js";

import "./client_facing.css";

export default function Client_Facing() {
    return(
        <section id="client_facing">
            <div id="header_container">
                <Header />
            </div>
            <div id="content_container">
                CONTENT ELEMENTS
                <Content />
            </div>
            <div id="footer_container">
                FOOTER ELEMENTS
                <Footer />
            </div>
        </section>
    )
};