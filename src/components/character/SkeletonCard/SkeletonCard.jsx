import React from "react";
import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="character-card skeleton">
      <div className="skeleton-img" />
      <div className="card-content">
        <div className="skeleton-title" />
        <div className="skeleton-text" />
        <div className="skeleton-button" />
      </div>
    </div>
  );
};

export default SkeletonCard;
