import React from "react";
import Ligne from "../Chartjs/Line";
import Rond from "../Chartjs/Doughnut";
import Cards from "./Card";
// import Money from "../assets/bye.png"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: [
                { id: 1, title: "Selena Boy", description1: "25.000 FCFA", description2: "01-06-2022", description3: [<div className="vert">Valide</div>] },
                { id: 2, title: "Emma Watson", description1: "25.000 FCFA", description2: "01-06-2022", description3: "En attente" },
                { id: 3, title: "Jhon Robert", description1: "25.000 FCFA", description2: "01-06-2022", description3: [<div className="vert">Valide</div>] },
                { id: 4, title: "Anne Hathaway", description1: "25.000 FCFA", description2: "01-06-2022", description3: "En attente" },
                { id: 5, title: "Ravi Shankar", description1: "25.000 FCFA", description2: "01-06-2022", description3: [<div className="vert">Valide</div>] },
                { id: 6, title: "Emma Stone", description1: "25.000 FCFA", description2: "01-06-2022", description3: [<div className="vert">Valide</div>] }
            ],
            tab2: [
                { id: 1, titre: "Selena Boy", ligne1: "01-06-2022", ligne2: [
                            <div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-100" style={{ height: '5px', }}></div>
                            </div>] },
                { id: 2, titre: "Jhon Robert", ligne1: "01-06-2022", ligne2: [
                            <div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-100" style={{ height: '5px'}}></div>
                            </div>] },
                { id: 3, titre: "Emma Stone", ligne1: "01-06-2022", ligne2: 
                            [<div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                            </div>] },
                { id: 4, titre: "Emma Watson", ligne1: "01-06-2022", ligne2: [
                            <div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                            </div>] },
                { id: 5, titre: "Anne Hathaway", ligne1: "01-06-2022", ligne2: [
                            <div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                            </div>] },
                { id: 6, titre: "Ravi Shankar", ligne1: "01-06-2022", ligne2: [
                            <div className="progress" role="progressbar" style={{ height: '5px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50" style={{ height: '5px', backgroundColor: '#083b4e'}}></div>
                            </div>] }
            ]
        };
    }
    render() {
        return (
            <div className="">
                <div className="row flx gx-5">
                    <div className="col-lg-4 long"><Cards title="Juin" content1="225.000 FCFA" content2="Nombre de cotisation : 27" /></div>
                    <div className="col-lg-4 long"><Cards title="Mai" content1="100.000 FCFA" content2="Nombre de cotisation : 23" /></div>
                    <div className="col-lg-4 long"><Cards title="Caisse" content1="3.500.000 FCFA / 5.000.000 FCFA"
                        content2={
                            <div className="progress" role="progressbar" style={{ height: '7px'}} aria-label="" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar w-50" style={{ height: '7px'}}></div>
                            </div>
                        }
                    />
                    </div>
                </div>
                <div className="row m-1 mt-4 gx-2 margine">
                    <div className="col-lg-6 ">
                        <Ligne />
                    </div>
                    <div className="col-lg-6 ">
                        <Rond />
                    </div>
                </div>
                <div className="row mt-5  m-1">
                    <div className="col-lg-6">
                        <h4>Juin</h4>
                        <div className=" bg-white shadow">
                        <table className="table">
                            <thead class="card-header">
                                <tr class="">
                                    <th>Membres</th>
                                    <th>Montant</th>
                                    <th>Date</th>
                                    <th>Statut</th>
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
                    </div>
                    <div className="col-lg-6">
                        <h4>Top progression</h4>
                        <div className=" bg-white shadow">
                        <table className="table">
                            <thead className="card-header">
                                <tr>
                                    <th>Membres</th>
                                    <th>Dare debut</th>
                                    <th>Progression</th>
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
            </div>
        );
    }
}

export default Dashboard;
