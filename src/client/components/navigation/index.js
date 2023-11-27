import React from "react";
import "./index.css"

export default function Navigation() {
    return(
        <section id="navigation_elements">
            <div id="navigation_bar">
                <div id="tab_about" className="navigation_tab">
                    <p>About</p>
                </div>
                <div id="tab_location" className="navigation_tab">
                    <p>Location</p>
                </div>
                <div id="tab_services" className="navigation_tab">
                    <p>Services</p>
                </div>
                <div id="tab_contact" className="navigation_tab">
                    <p>Contacts</p>
                </div>
            </div>
        </section>
    )
};