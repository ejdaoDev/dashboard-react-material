import React from 'react'

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" id="header">
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" >
                        <span className="mr-2 d-none d-lg-inline small">User Admin</span>
                    </a>
                    <div id="userOptions" className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a id="userItem" className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i id="userItem" className="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
                            Cerrar Sesión
                        </a>
                    </div>
                </li>
            </ul>

            <div>
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" >Seguro?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Selecciona "Cerrar Sesión" si deseas finalizar la
                                sesión actual.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button"
                                    data-dismiss="modal">Cancelar</button>
                                <a className="btn btn-primary">Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar
