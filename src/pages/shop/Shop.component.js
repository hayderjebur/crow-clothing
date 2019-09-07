import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPerview from "../../component/collections.preview.component/Collection.preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionsProps }) => (
          <CollectionPerview key={id} {...collectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
