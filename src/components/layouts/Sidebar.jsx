import React from 'react';
import Security from './modules/Security';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                </div>
                <i id="iconSidebar" className="fas fa-desktop"></i>
                <div id="tittleSidebar" className="sidebar-brand-text mx-3">YOUWEB</div>
            </Link><hr />
            <Security />
        </ul>
    )
}

export default Sidebar
