import React, { Component } from 'react';
import LaptopList from './LaptopList';

class App extends Component {
  state = { laptops: [] };

  componentDidMount() {
    try {
      fetch('/api')
        .then(res => res.json())
        .then(laptops => this.setState({ laptops }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1>The Laptop Store!</h1>
        <div className="container">
          <div className="cards-container">
            {this.state.laptops.map(
              ({ id, productname, image, cpu, screen, price }) => {
                return (
                  <LaptopList
                    key={id}
                    id={id}
                    productname={productname}
                    image={image}
                    cpu={cpu}
                    screen={screen}
                    price={price}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
