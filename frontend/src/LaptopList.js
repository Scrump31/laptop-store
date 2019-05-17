import React from 'react';
import './LaptopList.css';
import Laptop from './Laptop';

const LaptopList = ({ laptops, getDetails }) => {
  return (
    <div className="cards-container">
      {laptops.map(data => {
        return (
          <Laptop key={data.id} productinfo={data} getDetails={getDetails} />
        );
      })}
    </div>
  );
};

export default LaptopList;
