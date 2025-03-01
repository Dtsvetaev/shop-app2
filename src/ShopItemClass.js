import React from "react";
import "./App.css";

class ShopItemClass extends React.Component {
  render() {
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title.toUpperCase()}</h1>
        <h3>{description.toUpperCase()}</h3>
        <div className="description">{descriptionFull}</div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {currency}{price.toFixed(2)}
          </div>
          <button>ДОБАВИТЬ В КОРЗИНУ</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass;
