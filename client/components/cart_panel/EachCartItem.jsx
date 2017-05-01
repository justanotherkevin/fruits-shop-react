import React from 'react';

export default class EachCartItem extends React.Component {
  render() {
    console.log(this.props);
    var total_price = (this.props.price * this.props.quantityBuying).toFixed(2);
    return (
      <div className='cart_item row'>
        <div className='col_cart_left'>
          <img className="fruit_img" src={this.props.imgSrc} />
          <div>
            <button>add</button>
            <span>{this.props.quantityBuying}</span>
            <button>subtract</button>
            <span>@${this.props.price}each = {total_price}</span>
          </div>
        </div>
        <div className='col_cart_right'>
          {/* <div>
          </div> */}
          <a className='cart_delete'>delete</a>
        </div>
      </div>
    )
  }

}
