import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navebar from "../Navbar/Navbar";

 class Cardsutilisateur extends React.Component {
    render() {
        const { content1, content2 } = this.props;
     
        return (
          <div className="row ">
            <div className=" p-3 ">
              <h6>{content1}</h6>
              <h5>{content2}</h5>
            </div>
          </div>
        );
      }
    }   

class Ajouter extends React.Component {
render(){
    return(
        <div className=" mt-4">
            <button className="btn btn-secondary ajouter">Ajouter</button>
        </div>
    )
}
}
class Tableau extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                tableau: [
                    { id: 1, titre: "Selena Boy",ligne2: '300.000 FCFA', ligne1: "01-06-2022",  ligne3: [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-100" style={{ height: '5px', }}></div>
                    </div>], ligne4: [<div className="vert">Terminé</div>],ligne5: [ <i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> , <i className="bi bi-slash-circle"></i>]},
                    { id: 3, titre: "Jhon Robert",ligne2: '300.000 FCFA', ligne1: "01-06-2022",  ligne3: [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-100" style={{ height: '5px', }}></div>
                    </div>], ligne4: 'En cours',ligne5: [ <i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>] },
                    { id: 6, titre: "Emma Stone", ligne2: '300.000 FCFA', ligne1: "01-06-2022",   ligne3: [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                    </div>], ligne4: [<div className="vert">Terminé</div>], ligne5: [ <i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]},
                    { id: 2, titre: "Emma Watson", ligne2: '300.000 FCFA', ligne1: "01-06-2022",  ligne3: [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                    </div>], ligne4: 'En cours', ligne5: [<i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]},
                    { id: 4, titre: "Anne Hathaway", ligne2: '300.000 FCFA', ligne1: "01-06-2022", ligne3: [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                    </div>], ligne4: 'En cours', ligne5: [<i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]},
                    { id: 5, titre: "Ravi Shankar", ligne2: '300.000 FCFA', ligne1: "01-06-2022", ligne3: [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                    </div>], ligne4: 'En cours', ligne5: [<i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]}
            
                  ]
            }
    }
    render(){
        return(
            <div className="m-5">
            <div className=" mt-4 gx-5">
              <div className="col-lg-8 bg-white shadow col-md-6 ">
                <table className="table">
                  <thead className="card-header">
                    <tr>
                      <th>Membres</th>
                      <th>Debut debut</th>
                      <th>Seuil</th>
                      <th>Progression</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableau.map(objet => (
                      <tr key={objet.id} >
                        <td>{objet.titre}</td>
                        <td>{objet.ligne1}</td>
                        <td>{objet.ligne2}</td>
                        <td>{objet.ligne3}</td>
                        <td>{objet.ligne4}</td>
                        <td>{objet.ligne5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
    }
class Utilisateur extends React.Component {
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
              <Navebar />
            </div>
          <div className="contenu">
              <div className="row flx gx-5 gap">
              <div className="col-lg-4 w-25 shadow vrt rounded-3 text-white"><Cardsutilisateur content1= {[<div className="">Membres actifs <i class="bi bi-circle bg-white rounded-4 fs-6"></i></div>]} content2= "94 Membres"/></div>
                 <div className="col-lg-4  shadow w-25 rounded-3 ">
                    <Cardsutilisateur content1= {[<div>Membres Bloques <i className="bi bi-slash-circle danger"></i></div>]}  content2= "6 Membres" />
                 </div>
                 <div className="col-lg-4  shadow w-25 rounded-3 ">
                    <Cardsutilisateur content1= "Total Effectif"  content2= " 100 Membres" />
                 </div>
              </div>
              <div>
                <Ajouter />
              </div>
              <div>
                <Tableau />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Utilisateur