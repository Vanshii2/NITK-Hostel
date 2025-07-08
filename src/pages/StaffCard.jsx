import React from "react";
import "../styles/about/staffcard.css";

const StaffCard = ({ name, title, image, description }) => {
  return (
    <div className="staff-card">
      <img src={image} alt={title} />
      <div className="staff-card-content">
        <p>{description}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default StaffCard;
