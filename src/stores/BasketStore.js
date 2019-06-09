import { observable, action } from 'mobx';

class BasketStore {
  @observable basket = [];

  @action addToBasket = product => {
    // this.basket = product;
    this.basket.replace(this.basket.concat(product));
  };
}

const store = new BasketStore();

export default store;
