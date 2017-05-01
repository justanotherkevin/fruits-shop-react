import React from 'react';

export default class EachCartItem extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='cart_item'>
        <img className="fruit_img" src={this.props.imgSrc} />
        <div>
          <button>add</button>
          <span>{this.props.quantityBuying}</span>
          <button>subtract</button>
        </div>
        <div>
          <span>@${this.props.price}each</span>
        </div>
        <button>delete</button>
      </div>
    )
  }
}
