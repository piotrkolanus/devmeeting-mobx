import React from 'react';
import ProductList from '../components/ProductList';
import ProductStore from '../stores/ProductStore';
import BasketStore from '../stores/BasketStore';
import { Provider } from 'mobx-react';
import Basket from '../components/Basket';

const Root = () => (
  <Provider productStore={ProductStore} basketStore={BasketStore}>
    <>
      <ProductList />
      <Basket />
    </>
  </Provider>
);

export default Root;
