import React from 'react';
import './LaptopList.css';

const LaptopList = ({ id, productname, image, cpu, screen, price }) => {
  return (
    <figure className="card">
      <div className="card__hero">
        <img src={image} alt={productname} className="card__img" />
      </div>
      <h2 className="card__name">{productname}</h2>
      <p className="card__detail">
        <span className="emoji-left" role="img" aria-label="PC Monitor">
          🖥
        </span>{' '}
        {screen}
      </p>
      <p className="card__detail">
        <span className="emoji-left" role="img" aria-label="Abacus">
          🧮
        </span>{' '}
        {cpu}
      </p>
      <div className="card__footer">
        <p className="card__price">${price}</p>
        <a href="#" className="card__link">
          Check it out{' '}
          <span className="emoji-right" role="img" aria-label="Pointer">
            👉
          </span>
        </a>
      </div>
    </figure>
  );
};

export default LaptopList;
