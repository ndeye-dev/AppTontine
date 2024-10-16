import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navebar from "../Navbar/Navbar";

const cardCSS = {
    borderRadius: '8px',
    padding: '10px',
    margin: '16px',
  };
//   const { title = 'Utilisa teur' } = this.props;
 class Cardsutilisateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: props.cards || [
            {content1: "Membres Actif", content2: "94 Membres" },
            {content1: "Membres Bloques",  content2: "6 Membres" },
            {content1: "Total Effectif",  content2: " 100 Membres" },
          ]
        };
      }
      render() {
        return (
          <div className="flx" style={{ display: 'flex', justifyContent: 'center'}}>
            {this.state.cards.map((card, index) => (
              <div key={index} className="shadow w-75" style={cardCSS}>
                <p>{card.content1}</p>
                <h6>{card.content2}</h6>
              </div>
            ))}
          </div>
        );
      }
}

class Ajouter extends React.Component {
render(){
    return(
        <div>
            <button className="btn btn-secondary">Ajouter</button>
        </div>
    )
}
}
class Tableau extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                tableau: [
                    { id: 1, titre: "Selena Boy",ligne2: '300.000 FCFA', ligne1: "01-06-2022",  ligne3: '100%', ligne4: 'Terminé',ligne5: [ <i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> , <i className="bi bi-slash-circle"></i>]},
                    { id: 3, titre: "Jhon Robert",ligne2: '300.000 FCFA', ligne1: "01-06-2022",  ligne3: '100%', ligne4: 'En cours',ligne5: [ <i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>] },
                    { id: 6, titre: "Emma Stone", ligne2: '300.000 FCFA', ligne1: "01-06-2022",   ligne3: '100%', ligne4: 'Terminé', ligne5: [ <i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]},
                    { id: 2, titre: "Emma Watson", ligne2: '300.000 FCFA', ligne1: "01-06-2022",  ligne3: '100%', ligne4: 'En cours', ligne5: [<i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]},
                    { id: 4, titre: "Anne Hathaway", ligne2: '300.000 FCFA', ligne1: "01-06-2022", ligne3: '100%', ligne4: 'En cours', ligne5: [<i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]},
                    { id: 5, titre: "Ravi Shankar", ligne2: '300.000 FCFA', ligne1: "01-06-2022", ligne3: '100%', ligne4: 'En cours', ligne5: [<i className="bi bi-eye"></i> , <i className="bi bi-file-check"></i> ,<i className="bi bi-slash-circle"></i>]}
            
                  ]
            }
    }
    render(){
        return(
            <div className="m-5">
            <div className="row mt-4 gx-5">
              <div className="col-lg-8 bg-white shadow col-md-6">
                <table className="table">
                  <thead style={{ backgroundColor: 'red', color: 'white' }}>
                    <tr>
                      <th style={{ backgroundColor: '#10ef66' }}>Membres</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Debut debut</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Seuil</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Progression</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Statut</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Actions</th>

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
              <Navebar nom="Utilsateur"/>
            </div>
          <div className="contenu">
              <div>
                 <Cardsutilisateur />
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