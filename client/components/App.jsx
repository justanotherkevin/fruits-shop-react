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
      <div className="main">
        <section className="fruits_panel col_cart_left">
          <FruitsList
            fruits_collection={this.state.fruits_collection}
            add_to_cart={this.addToCart.bind(this)}
          />
        </section>
        <section className="cart_panel col_cart_right">
          <CartList
            cart_collection={this.state.cart_collection}
            delete_from_cart={this.deleteFromCart.bind(this)}
            empty_cart={this.emptyCart.bind(this)}
            add_one={this.addOneToBuying.bind(this)}
            sub_one={this.subOneToBuying.bind(this)}
            finalize={this.confirmPurchase.bind(this)}
          />
        </section>
      </div>
    );
  }
  addToCart(object) {
    var cart_collection = this.state.cart_collection;
    var inc = false;
    var out_of_stock = this.outOfStock(object);
    
    for (var fruit in cart_collection) {
      if (cart_collection[fruit].itemName == object.itemName) {
        inc = true;
      }
    }

    if (inc == true) {
      this.addOneToBuying(object)
    } else if (out_of_stock == true) {
      alert('Out of stock!');
    } else {
      cart_collection.push(object);
      this.setState({cart_collection: cart_collection});
    }
  }
  deleteFromCart(obj) {
    var cart_collection = this.state.cart_collection;
    cart_collection = cart_collection.filter(function(desireObject) {
      return desireObject.itemName !== obj.itemName
    })
    this.setState({cart_collection: cart_collection});
  }
  emptyCart() {
    var cart_collection = this.state.cart_collection;
    if (cart_collection.length > 0) {
      cart_collection = [];
      this.setState({cart_collection: cart_collection});
    } else {
      alert("Cart is empty")
    }
  }
  addOneToBuying(obj) {
    var cart_collection = this.state.cart_collection;
    var fruit_from_cart = cart_collection.find(fruit => fruit.itemName == obj.itemName)

    if (fruit_from_cart.quantityBuying >= fruit_from_cart.quantityRemaining) {
      alert("Can not go over amount in stock")
    } else {
      fruit_from_cart.quantityBuying += 1
    }
    this.setState({cart_collection: cart_collection});
  }
  subOneToBuying(obj) {
    var cart_collection = this.state.cart_collection;
    cart_collection.find(fruit => fruit.itemName == obj.itemName).quantityBuying -= 1;
    this.setState({cart_collection: cart_collection});
  }
  confirmPurchase() {
    var fruits_collection = this.state.fruits_collection;
    var cart_collection = this.state.cart_collection;

    for (var each_cart in cart_collection) {
      fruits_collection.find(each_fruit => each_fruit.itemName == cart_collection[each_cart].itemName).quantityRemaining -= cart_collection[each_cart].quantityBuying;
    }
    this.emptyCart()
    this.setState({fruits_collection: fruits_collection});
  }
  outOfStock(obj) {
    var fruits_collection = this.state.fruits_collection;
    return (
      fruits_collection.find(fruit => fruit.itemName == obj.itemName).quantityRemaining <= 0 ? true : false
    );
  }
}
