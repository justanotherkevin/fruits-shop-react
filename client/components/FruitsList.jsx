import React from 'react';
import EachFruit from './EachFruit.jsx'

export default class FruitsList extends React.Component {
  render() {

    let renderFruits = this.props.fruits_collection.map( (fruit, i) => <EachFruit
      {...fruit}
      key={i}
      add_to_cart={this.props.add_to_cart.bind(this)}
    />);

    return (
        <div>
          {renderFruits}
        </div>
    )
  }
}
