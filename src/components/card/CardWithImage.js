import React from 'react';
import './card.scss';

const CardWithImage = ({ title, image, text }) => {
  return (
    <div className="card-container">
      <img src={image} alt={title} />
      <div className="card-title">
        <p className="title">{title}</p>
        <h3 className="text">{text}</h3>
      </div>
    </div>
  )
}

export default CardWithImage;