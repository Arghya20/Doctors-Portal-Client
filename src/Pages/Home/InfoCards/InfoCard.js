import React from "react";

const InfoCard = ({ card }) => {
  const { icon, name, description, bgClass } = card;
  return (
    <div className={`card md:card-side ${bgClass} shadow-xl p-4 text-white`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
