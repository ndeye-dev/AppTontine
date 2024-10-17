import React from "react";
  
  class Cards extends React.Component {
   
    render() {
      const { title, content1, content2,img } = this.props;
   
      return (
        <div className="row">
          <div className="shadow ">
            <p>{title}</p>
            <h6>{content1}</h6>
            <p className="text-secondary">{img}{content2}</p>
          </div>
        </div>
      );
    }
  }
  
export default Cards