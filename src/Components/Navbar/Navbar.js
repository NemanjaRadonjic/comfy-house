import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <i className="fas fa-bars"></i>

        <h1>
          <span className="main-header comfy">Comfy</span>
          <span className="main-header house">House</span>
        </h1>

        <i className="fas fa-cart-plus" onClick={this.props.handleClick}>
          {this.props.itemsInCart > 0 && (
            <div className="products-number">{this.props.itemsInCart}</div>
          )}
        </i>
      </div>
    );
  }
}

export default Navbar;
