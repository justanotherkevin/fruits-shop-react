import React from 'react';

export default class EachCartItem extends React.Component {
  render() {
    console.log(this.props);
    var item = this.props;
    var total_price = (item.price * item.quantityBuying).toFixed(2);
    return (
      <div className='cart_item'>
        <div className='col_cart_left'>
          <img className="cart_img" src={item.imgSrc} />
          <button>-</button>
          <span>{item.quantityBuying}</span>
          <button>+</button>
          <span>@${item.price}each = ${total_price}</span>
        </div>
        <div className='col_cart_right'>
          <a className='cart_delete' onClick={this.onDeleteFromCart.bind(this)}>Delete</a>
        </div>
      </div>
    )
  }
  onDeleteFromCart() {
    this.props.delete_from_cart(
      this.props
    );
  }
}
