import React from 'react';
import { Link } from 'react-router-dom';
import './Laptop.css';

const Laptop = ({ productinfo, getDetails }) => {
  const { image, productname, screen, price, cpu } = productinfo;
  const handleGetDetails = () => getDetails(productname);

  return (
    <div>
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
          <Link
            onClick={handleGetDetails}
            to={`/detail/${productname}`}
            className="card__link"
          >
            Check it out{' '}
            <span className="emoji-right" role="img" aria-label="Pointer">
              👉
            </span>
          </Link>
        </div>
      </figure>
    </div>
  );
};

export default Laptop;
