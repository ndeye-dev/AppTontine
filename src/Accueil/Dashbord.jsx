import React from "react";
import Ligne from "../Chartjs/Line";
import Rond from "../Chartjs/Doughnut";
import Cards from "./Card";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: [
        { id: 1, title: "Selena Boy", description1: "25.000 FCFA", description2: "01-06-2022", description3: "valide" },
        { id: 2, title: "Emma Watson", description1: "25.000 FCFA", description2: "01-06-2022", description3: "En attente" },
        { id: 3, title: "Jhon Robert", description1: "25.000 FCFA", description2: "01-06-2022", description3: "Valide" },
        { id: 4, title: "Anne Hathaway", description1: "25.000 FCFA", description2: "01-06-2022", description3: "En attente" },
        { id: 5, title: "Ravi Shankar", description1: "25.000 FCFA", description2: "01-06-2022", description3: "Valide" },
        { id: 6, title: "Emma Stone", description1: "25.000 FCFA", description2: "01-06-2022", description3: "Valide" }
      ],
      tab2: [
        { id: 1, titre: "Selena Boy", ligne1: "01-06-2022", ligne2: '100%' },
        { id: 3, titre: "Jhon Robert", ligne1: "01-06-2022", ligne2: '100%' },
        { id: 6, titre: "Emma Stone", ligne1: "01-06-2022", ligne2: '100%' },
        { id: 2, titre: "Emma Watson", ligne1: "01-06-2022", ligne2: '100%' },
        { id: 4, titre: "Anne Hathaway", ligne1: "01-06-2022", ligne2: '100%' },
        { id: 5, titre: "Ravi Shankar", ligne1: "01-06-2022", ligne2: '100%' }
      ]
    };
  }
  render() {
    return (
      <div className="">
        <Cards />
        <div className="row m-1 mt-4 gx-3">
          <div className="col-lg-6">
            <Ligne />
          </div>
          <div className="col-lg-6 ">
            <Rond />
          </div>
        </div>
        <div className="row mt-5 gx-5 m-2">
          <div className="col-lg-6 bg-white shadow">
            <h4>Juin</h4>
            <table className="table">
              <thead style={{ backgroundColor: 'green' }}>
                <tr>
                  <th style={{ backgroundColor: '#10ef66' }}>Membres</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Montant</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Date</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Statut</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tab1.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description1}</td>
                    <td>{item.description2}</td>
                    <td>{item.description3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-6 bg-white shadow">
            <h4>Top progression</h4>
            <table className="table">
              <thead style={{ backgroundColor: 'red', color: 'white' }}>
                <tr>
                  <th style={{ backgroundColor: '#10ef66' }}>Membres</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Dare debut</th>
                  <th style={{ backgroundColor: '#10ef66' }}>Progression</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tab2.map(objet => (
                  <tr key={objet.id} >
                    <td>{objet.titre}</td>
                    <td>{objet.ligne1}</td>
                    <td>{objet.ligne2}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
