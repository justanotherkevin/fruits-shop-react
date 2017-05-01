import React from 'react';
import EachCartItem from './EachCartItem.jsx';

export default class CartList extends React.Component {
  render() {
    let renderCart = this.props.cart_collection.length == 0 ? [] : this.props.cart_collection.map( (item, i) => <EachCartItem {...item} key={i} />);
    return (
      <div className='cart_list'>
        {renderCart}
      </div>
    )
  }
}
