import React, { Component } from 'react';
import './index.css';
import colors from '../Colors';

class Items extends Component {
  delete(key) {
    this.props.delete(key);
  }

  render() {
    let items = this.props.items;
    let itemsList = items.map(item => {
      return (
        <div
          className="item"
          key={item.key}
          onClick={() => this.delete(item.key)}
          style={{ background: colors[Math.floor(Math.random() * 13)] }}
        >
          {item.text}
        </div>
      );
    });
    return <div className="itemsArea">{itemsList}</div>;
  }
}

export default Items;
