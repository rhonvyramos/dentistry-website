import React from "react";
import Header from "../components/header/index.js";
import Content from "../components/content/index.js";
import Footer from "../components/footer/index.js";

export default function Client_Facing() {
    return(
        <section id="client_facing">
            <div id="header_container">
                <Header />
            </div>
            <div id="content_container">
                <Content />
            </div>
            <div id="footer_container">
                <Footer />
            </div>
        </section>
    )
};