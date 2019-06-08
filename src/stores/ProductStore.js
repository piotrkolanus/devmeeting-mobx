import { observable } from "mobx";

class ProductStore{
    @observable products = [
        { id: 0, name: 'apple', isPromoted: true, tags: ['fruit', 'red'], price: 10 },
        { id: 1, name: 'coffee', isPromoted: true, tags: ['energy', 'black'], price:18 },
        { id: 2, name: 'water',tags: ['drink', 'wet'], price:24},
        { id: 3, name: 'orange', price:12},
        { id: 4, name: 'orange', price:36}
    ]
}

const store = new ProductStore();

export default store;