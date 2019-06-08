import { observable, action } from "mobx";

class ProductStore{
    @observable products = [
        { id: 0, name: 'apple', isPromoted: true, tags: ['fruit', 'red'], price: 10 },
        { id: 1, name: 'coffee', isPromoted: true, tags: ['energy', 'black'], price:18 },
        { id: 2, name: 'water',tags: ['drink', 'wet'], price:24},
        { id: 3, name: 'orange', price:12},
        { id: 4, name: 'orange', price:36}
    ]

    @observable isProductsVisible = true;
    @observable filtered = [];

    @action buyProduct = id => {
    const productToBeSold = this.products.find(p => p.id === id);
    productToBeSold.isSold = true;
    }
    @action handleSortName = () => {
        this.products.replace(this.products.slice().sort((a, b) => (a.name.localeCompare(b.name))));
    }
    @action filterByName = (value) => {
        const currentProducts = this.products;
        
        const test = currentProducts.filter(product => product.name.includes(value));
        let isProductVisible = false;

        if(value.length===0)
        {
            isProductVisible = true;    
        }
        this.isProductsVisible = isProductVisible;
        this.filtered.replace(test);
    }
    @action handleSortPlace = () => {
        const currentProducts = [...this.products];
        const sorted = currentProducts.sort((a, b) => (a.price - b.price));
    this.products.replace(sorted);
    }
}
// observableArray.replace(observableArray.slice().sort())`

const store = new ProductStore();

export default store;