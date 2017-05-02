import React from 'react';

export default class EachCartItem extends React.Component {
  render() {
    console.log(this.props);
    var total_price = (this.props.price * this.props.quantityBuying).toFixed(2);
    return (
      <div className='cart_item'>
        <div className='col_cart_left'>
          <img className="cart_img" src={this.props.imgSrc} />
          <button>-</button>
          <span>{this.props.quantityBuying}</span>
          <button>+</button>
          <span>@${this.props.price}each = ${total_price}</span>
        </div>
        <div className='col_cart_right'>
          <a className='cart_delete'>Delete</a>
        </div>
      </div>
    )
  }

}
