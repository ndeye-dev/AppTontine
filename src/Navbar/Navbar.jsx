
import React from "react";
import Profil from '../assets/person.png'

class Navebar extends React.Component {
    render() {
        const { title = 'Admin Dashboard' } = this.props;

        return (
            <div className="position-fixed navb">
                <nav className="d-flex bg-white shadow p-2 justify-content-between ">
                    <div>
                        <h5 className="fw-bold">{title}</h5>
                    </div>
                    <div className="d-flex margin gap-2">
                        <i class="bi bi-bell fs-5 fw-bold"></i>
                        <img src={Profil} alt="person" className=" imagee"/>
                        <div>
                        <h5>Ndiaga SALL </h5>
                        <span>Administrator</span>
                        </div>
                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Profil</button></li>
                            <li><button class="dropdown-item" type="button">Modifier Mot de Passe</button></li>
                            <li><button class="dropdown-item" type="button">Deconnexion</button></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                
            </div>
        )
    }
}
export default Navebar