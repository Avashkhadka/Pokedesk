import React from "react";
import "./card.css"
function Card() {
  return (
    <span className="card m-4">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content"></div>
    </span>
  );
}

export default Card;
