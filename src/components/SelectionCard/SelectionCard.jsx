import React from "react";

import "./SelectionCard.scss";

export const SelectionCard = (props) => {
  return (
    <div
      className={`user-selection-card ${props.selected ? "selected-card" : ""}`}
      role="button"
      tabIndex="0"
    >
      <img className="card-icon mb-4 " src={props.chosenLogo} alt="Icon" />
      <span className={`card-title ${props.selected ? "selected-title" : ""} mb-2`}>
        {props.title}
      </span>
      <p className="card-description">{props.description}</p>
    </div>
  );
};
