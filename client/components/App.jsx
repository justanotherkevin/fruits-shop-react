import React from 'react';
import FruitsList from './FruitsList.jsx';
import CartList from './cart_panel/CartList.jsx';

var all_the_furits = require('../../json_files/store_items.json');
var fruits_collection = all_the_furits;

var cart_collection = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        fruits_collection,
        cart_collection
    };
  }

  render() {
    return (
      <div className="row">
        <section className="fruits_panel col-md-8">
          <FruitsList
            fruits_collection={this.state.fruits_collection}
            add_to_cart={this.addToCart.bind(this)}
          />
        </section>
        <section className="cart_panel col-md-4">
          <CartList cart_collection={this.state.cart_collection} />
        </section>
      </div>
    );
  }
  addToCart(object) {
    
    this.state.cart_collection.push(object)
    this.setState({cart_collection: this.state.cart_collection});
  }
}
