import React from "react";

const cardStyle = {
    borderRadius: '8px',
    padding: '10px',
    margin: '16px',
  };
 class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [
            { title: "Juin", content1: "225.000 FCFA", content2: "Nombre de cotisation : 27" },
            { title: "Mai", content1: "100.000 FCFA",  content2: "Nombre de cotisation: 23" },
            { title: "Caisse", content1: "3.500.000 FCFA / 5.000.000 FCFA",  content2: "Content for card 1" }
          ]
        };
      }
      render() {
        return (
          <div className="flx ">
            {this.state.cards.map((card, index) => (
              <div key={index} className="shadow w-75" style={cardStyle}>
                <p>{card.title}</p>
                <h6>{card.content1}</h6>
                <p>{card.content2}</p>
              </div>
            ))}
          </div>

        );
      }
}
export default Cards