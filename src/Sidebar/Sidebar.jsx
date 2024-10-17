
import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="">
                <button
                    className="btn btn-toggle d-md-none" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarContent"
                    aria-expanded="false"
                    aria-controls="sidebarContent"
                >
                    <i className="bi bi-list"></i> 
                </button>
                <div className="sidebar bag collapse d-md-block position-fixed" id="sidebarContent">
                    <h4 className="fw-bold mb-5">
                        <i className="bi bi-bag-check"></i> Bakeli Tontine
                    </h4>
                    <ul className="navbar-nav fs-5 fw-bold">
                        <Link to="/Accueil" className="text-white text-decoration-none">
                        <li className="nav-item couleur mb-2 p-2">
                            <i class="bi bi-grid"></i> Dashboard
                        </li>
                        </Link>
                        <Link to="/Utilisateur" className="text-white text-decoration-none">
                        <li className="nav-item mb-2 hover p-2">
                            <i className="bi bi-person"></i> Utilisateurs
                        </li>
                        </Link>
                        <Link to="/Cotisation" className="text-white text-decoration-none">
                        <li className="nav-item mb-2 p-2 hover">
                            <i className="bi bi-currency-exchange"></i> Cotisations
                        </li>
                        </Link>
                        <div className="btn-group">
                            <p className="p-2 hover"><i className="bi bi-gear"></i> Paramètres
                            <button
                                type="button"
                                className="btn dropdown-toggle text-white"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></button>
                            <ul className="dropdown-menu dropdown-menu-end left">        
                                <Link to="/Parametre"><li><button className="dropdown-item" type="button">Parametres Generaux</button></li></Link> 
                                <Link><li><button className="dropdown-item" type="button">Utisateurs</button></li></Link>
                                <li><button className="dropdown-item" type="button">Archives</button></li>
                                <li><button className="dropdown-item" type="button">Membres Bloques</button></li>
                            </ul>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar;

