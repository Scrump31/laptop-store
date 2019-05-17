import React from 'react';
import { Link } from 'react-router-dom';
import './LaptopDetail.css';

const LaptopDetail = props => {
  const {
    image,
    productname,
    screen,
    price,
    cpu,
    description,
    ram,
    storage,
  } = props.details;

  return (
    <div>
      <figure className="laptop">
        <p className="laptop__price">${price}</p>
        <Link to="/" className="laptop__back">
          <span className="emoji-left" role="img" aria-label="Pointer">
            👈
          </span>
          Back
        </Link>
        <div className="laptop__hero">
          <img src={image} alt={productname} className="laptop__img" />
        </div>
        <h2 className="laptop__name">{productname}</h2>
        <div className="laptop__details">
          <p>
            <span className="emoji-left" role="img" aria-label="PC Monitor">
              🖥
            </span>{' '}
            {screen}
          </p>
          <p>
            <span className="emoji-left" role="img" aria-label="Abacus">
              🧮
            </span>{' '}
            {cpu}
          </p>
          <p>
            <span className="emoji-left" role="img" aria-label="Floppy Disk">
              💾
            </span>{' '}
            {storage} of storage
          </p>
          <p>
            <span className="emoji-left" role="img" aria-label="Box">
              📦
            </span>{' '}
            {ram} of RAM
          </p>
        </div>
        <p className="laptop__description">{description}</p>
        <p className="laptop__source">
          Source:{' '}
          <a
            href="https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361
          </a>
        </p>
        <a
          href={`https://www.google.com/search?q=${productname}`}
          className="laptop__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Buy now for ${price}
        </a>
      </figure>
    </div>
  );
};
export default LaptopDetail;
