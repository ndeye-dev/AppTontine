import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Inscription from "./Inscritption/Inscription";
import Connexion from "./Connexion/Connexion";
import Accueil from "./Accueil/Accueil";
import Utilisateur from "./Accueil/Utilisateur";
import Cotisation from "./Accueil/Cotisation";
import Parametre from "./Accueil/Parametres";

class App extends React.Component {
  render() {
    return (

      <div>
        <Routes>
        <Route path="/" element={<Inscription />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Utilisateur" element={<Utilisateur />}/>
        <Route path="/Dashbord" element={<Accueil />}/>
        <Route path="/Cotisation" element={<Cotisation />}/>
        <Route path="/Parametre" element={<Parametre />}/>

        </Routes>
      </div>
    )
  }
}
export default App
