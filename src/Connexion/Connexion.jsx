import React from "react";
import Img from '../assets/remvbg.png'
import '../App.css';
import { Link } from 'react-router-dom';

// pour l'image
class Image extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    )
  }
}

// pour le titre
class Titre extends React.Component {
  render() {
    return (
      <div>
        <h1 className="texte fw-bold text-center pb-5">{this.props.text}</h1>
      </div>
    )
  }
}

// pour la formulaire
class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telephone: '',
      motdepass: ''
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Validation
    if (!username || !password) {
      this.setState({ errorMessage: "Tous les champs doivent être remplis." });
      return;
    }

    const phonePattern = /^[0-9]{10}$/; 
    if (!phonePattern.test(username)) {
      this.setState({ errorMessage: "Veuillez entrer un numéro de téléphone valide." });
      return;
    }
    this.setState({ errorMessage: '' });
    // Rediriger vers la page d'accueil (ou autre action)
    this.props.history.push('/accueil');  };

  render() {
    return (
      <div>
        <h3 className="texte pb-2">Connectez-vous</h3>
        <p className="texte pb-2">Connectez-vous et gérez vos cotisations</p>
        {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3 pb-2">
            <input
              type="text"
              name="username"
              placeholder="N° téléphone"
              value={this.state.username}
              onChange={this.handleChange}
              required
              className="form-control fond w-50"
            />
          </div>
          <div className="mb-3 pb-2">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className="form-control fond w-50 "
            />
          </div>
          <p className="texte">Mot de passe oublié ?</p>
          <Link to="/Accueil"><button type="submit" className="btn btn-success w-50">Connexion</button></Link>
          <p className="texte pt-3">Vous n'avez pas de compte ? <Link to="/Inscription">Inscrivez-vous</Link></p>
        </form>
      </div>   
    )
  }
}
class Connexion extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid for ">
          <div className="row">
            <div className="col-lg-4 img">
              <Image src={Img} alt="imagee" />
            </div>
            <div className="col-lg-8 mt-5  texte">
              <Titre text="Bienvenue sur Bakeli-tontine" />
              <Formulaire />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Connexion