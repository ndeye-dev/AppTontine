import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navebar from "../Navbar/Navbar";

const cardCSS = {
    borderRadius: '8px',
    padding: '10px',
    margin: '16px',
  };
class Cardcotisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: props.cards || [
            {content1: "Juin", content2: "225.000FCFA" },
            {content1: "Mai",  content2: "100.000 FCFA" },
            {content1: "Total Caisse",  content2: "3.500.000 FCFA" },
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
class Tab extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                tableau: [
                    { id: 1, titre: "Selena Boy",ligne2: '200.000 FCFA', ligne1: "01-01-2022",  ligne3: '100.000 fcfa', ligne5: [ <i className="bi bi-eye"></i> ]},
                    { id: 3, titre: "Jhon Robert",ligne2: '200.000 FCFA', ligne1: "01-01-2022",  ligne3: '100.000 fcfa', ligne5: [ <i className="bi bi-eye"></i>] },
                    { id: 6, titre: "Emma Stone", ligne2: '200.000 FCFA', ligne1: "01-01-2022",   ligne3: '100.000 fcfa',  ligne5: [ <i className="bi bi-eye"></i>]},
                    { id: 2, titre: "Emma Watson", ligne2: '200.000 FCFA', ligne1: "01-01-2022",  ligne3: '100.000 fcfa',  ligne5: [<i className="bi bi-eye"></i>]},
                    { id: 4, titre: "Anne Hathaway", ligne2: '200.000 FCFA', ligne1: "01-01-2022", ligne3: '100.000 fcfa',  ligne5: [<i className="bi bi-eye"></i>]},
                    { id: 5, titre: "Ravi Shankar", ligne2: '200.000 FCFA', ligne1: "01-01-2022", ligne3: '100.000 fcfa',  ligne5: [<i className="bi bi-eye"></i>]}
            
                  ]
            }
    }
    render() {
        return (
            <div className="m-5">
            <div className=" mt-4 gx-5">
              <div className="col-lg-8 bg-white shadow col-md-6">
                <table className="table">
                  <thead style={{ backgroundColor: 'red', color: 'white' }}>
                    <tr>
                      <th style={{ backgroundColor: '#10ef66' }}>Membres</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Debut debut</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Montant cotise</th>
                      <th style={{ backgroundColor: '#10ef66' }}>Montant restant</th>
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
class Cotisation extends React.Component {
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
              <div>
                <Cardcotisation />

                <Tab />
              </div>
          </div>
          </div>

        </div>
        
      </div>
      </div>
    )
  }
}
export default Cotisation