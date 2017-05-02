import React from 'react';
import EachCartItem from './EachCartItem.jsx';

export default class CartList extends React.Component {
  render() {
    console.log(this.props);
    let item_or_items = this.props.cart_collection.length > 1 ? 'items' : 'item'
    let renderCart = this.props.cart_collection.length == 0 ? [] : this.props.cart_collection.map( (item, i) => <EachCartItem {...item} key={i} />);
    return (
      <div className='cart_list'>
        <h3 className='cart_title'>shopping cart</h3>
        <span>{this.props.cart_collection.length} {item_or_items}</span>
        {renderCart}

        <hr></hr>
        <span className='line_spacing'></span>
        <div className='sum_all_items'>
          <span>Total:</span>
          <a>Empty Cart</a>
          <button>Confirm Purchase</button>
        </div>
      </div>
    )
  }

}
