import React from 'react';

export default class NavBar extends
React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
            <li className="active"><a href="#" className="tab">Fruit</a></li>
        </ul>
      </div>
    )
  }
}
