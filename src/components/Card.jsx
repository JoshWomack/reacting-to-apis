import React from "react";

function Card(props) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card m-2 rounded">
        <div className="card-body">
          <h5 className="card-title"> {props.cardTitle}</h5>
          <p className="card-text"> {props.cardContent}</p>
          <p className="card-text"> {props.cardContent2} </p>
          <p className="card-text"> {props.cardContent3} </p>
          <p className="card-text"> {props.cardContent4} </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
