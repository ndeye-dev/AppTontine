import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navebar from "../Navbar/Navbar";
import Profil from '../assets/person.png'

class Profile extends React.Component {
  render() {
    return (
      <div className="text-center">
        <p>Profil</p>
        <img src= {Profil} alt="" className="prof"/>
        <h2 className="texte">Ndiaga Sall</h2>
        <p className="texte">Admin</p>
        <button className=" buttonp btn btn-secondary"> Editer profil </button>
      </div>
    )
  }
}
 class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tab1: [
            { id: 1,description1: "Prenom", description2: "Ndiaga" },
            { id: 2, description1: "Nom", description2: "Sall"},
            { id: 3, description1: "Staut", description2: "Administrateur" },
            { id: 4, description1: "E-mail", description2: "ndiaga@gmail.com" },  
            
          ],
          tab2: [
            { id: 1, tabl1: "Nombre de membre ajoutes", tabl2: "25" },  
            { id: 2, tabl1: "Nombre de membre archives", tabl2: "10" },  
            { id: 3, tabl1: "Nombre de membre bloques", tabl2: "4" },  
              
          ]
        }
    }
    render() {
    return (
      <div>
        <div className=" bg-white shadow">
            <table className="table">
              <thead style={{ backgroundColor: 'green' }}>
                <tr>
                  <th style={{ backgroundColor:'#10ef66' }}>Membres</th>
                  <th style={{ backgroundColor:'#10ef66' }}></th>
                </tr>
              </thead>
              <tbody>
                {this.state.tab1.map(item => (
                  <tr key={item.id}>
                    <td>{item.description1}</td>
                    <td>{item.description2}</td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
            <table className="table">
                <thead>
                    <tr>
                        <th>Statistique</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.tab2.map(item => (
                  <tr key={item.id}>
                    <td>{item.tabl1}</td>
                    <td>{item.tabl2}</td>
                  </tr>
                  
                ))}
                </tbody>
            </table>
          </div>
      </div>
    )
  }
}
class Parametre extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="d-flex">
                        <div className="sidbar">
                            <Sidebar />
                        </div>
                        <div className="main">
                            <div className="navebar">
                                <Navebar nom="Utilsateur" />
                            </div>
                            <div className="contenu row"> 
                                <h3 className="">Parametres Generaux</h3>
                                <div className="col-lg-3">
                                    <Profile />
                                </div>
                                <div className="col-lg-8">
                                    <Info />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Parametre