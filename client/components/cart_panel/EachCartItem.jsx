import React from 'react';

export default class EachCartItem extends React.Component {
  render() {
    var item = this.props;
    var total_price = (item.price * item.quantityBuying).toFixed(2);
    return (
      <div className='cart_item'>
        <div className='col_cart_left'>
          <img className="cart_img" src={item.imgSrc} />
          <button className='glyphicon glyphicon-minus' onClick={this.onSubOneFromBuying.bind(this)}></button>
          <span>{item.quantityBuying}</span>
          <button className='glyphicon glyphicon-plus' onClick={this.onAddOneToBuying.bind(this)}></button>
          <br></br>
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
  onAddOneToBuying() {
    var item = this.props;
    if (item.quantityBuying < item.quantityRemaining) {
      item.add_one(item);
    } else {
      alert("Can not go over amount in stock")
    }
  }
  onSubOneFromBuying() {
    var item = this.props;
    if (item.quantityBuying == 1) {
      this.onDeleteFromCart()
    } else {
      item.sub_one(item)
    }
  }
}
