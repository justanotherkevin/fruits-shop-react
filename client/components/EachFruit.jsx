import React from 'react';

export default class EachFruit extends React.Component {
    render() {
        return (
            <div className='each_fruit'>
                    <img className="fruit_img" src={this.props.imgSrc} />
                    <div className="fruit_name">{this.props.itemName}</div>
                    <div className="fruit_price">${this.props.price} <span className="fruit_remaining">{this.props.quantityRemaining} In Stock</span></div>
                    <button onClick={this.onAddToCart.bind(this)}>add to cart</button>

            </div>
        );
    }
    onAddToCart() {
        this.props.add_to_cart({
            "itemName": this.props.itemName,
            "imgSrc": this.props.imgSrc,
            "price": this.props.price,
            "quantityRemaining": this.props.quantityRemaining,
            "quantityBuying": 1
        })
    }

}
