import React from 'react';
import { Link } from "react-router-dom";

const Security = () => {
    return (
        <li id="module" className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSecurity" aria-expanded="true"
                aria-controls="collapseSecurity">
                <i id="iconModule" className="fas fa-lock"></i>
                <span id="titleModule"> Seguridad</span>
            </a>
            <div id="collapseSecurity" className="collapse" aria-labelledby="headingSecurity" data-parent="#accordionSidebar">
                <div className="bg-gray-300 py-2 collapse-inner rounded ">
                    <Link className="collapse-item"  to="/create-new-user">Crear Nuevo Usuario</Link>
                    <Link className="collapse-item" to="/edit-user">Editar Usuario</Link>
                </div>
            </div>
        </li>
    )
}

export default Security

//rafce
