import React, { Component } from 'react';
import Product from './Product';
import productStore from '../stores/ProductStore';
import { observer, inject } from 'mobx-react';
import Tags from './Tags';
import basketStore from '../stores/BasketStore';

@inject('productStore')
@observer
class ProductList extends Component {
  handleBuyClick = id => {
    productStore.buyProduct(id);
    const boughtProduct = productStore.products.find(
      product => product.id === id
    );
    basketStore.addToBasket(boughtProduct);
  };

  handleSortName = () => {
    productStore.handleSortName();
  };

  handleSortPrice = () => {
    productStore.handleSortPlace();
  };

  filterProducts = e => {
    productStore.filterByName(e.target.value);
  };

  render() {
    return (
      <>
        <button onClick={this.handleSortName}>Sort by name</button>
        <button onClick={this.handleSortPrice}>Sort by price</button>
        <input onChange={this.filterProducts}></input>
        <ul>
          {productStore.isProductsVisible &&
            productStore.products.map(p => {
              return (
                <li key={p.id}>
                  <Product
                    name={p.name}
                    onBuyClick={this.handleBuyClick}
                    id={p.id}
                    price={p.price}
                  />
                  <Tags tags={p.tags} />
                </li>
              );
            })}

          {productStore.filtered.map(p => (
            <li key={p.id}>
              <Product
                name={p.name}
                onBuyClick={this.handleBuyClick}
                id={p.id}
                price={p.price}
              />
              <Tags tags={p.tags} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ProductList;
