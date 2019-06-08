import React, {Component} from 'react';
import Product from './Product';
import PromotedProduct from './PromotedProduct';
import Tags from './Tags';

class ProductList extends Component {
    state = {
        isProductsVisible: true,
        products: [
            { id: 0, name: 'apple', isPromoted: true, tags: ['fruit', 'red'], price: 10 },
            { id: 1, name: 'coffee', isPromoted: true, tags: ['energy', 'black'], price:18 },
            { id: 2, name: 'water',tags: ['drink', 'wet'], price:24},
            { id: 3, name: 'orange', price:12},
            { id: 4, name: 'orange', price:36}
        ],
        filtered:[],
    }

    handleBuyClick = id => {
        console.log('click')
        this.setState(prevState => {
            const products = prevState.products.map(p => p.id === id ? { ...p, isSold: true } : p)
            
            return { products }
        })
        
    }

    handleSortName = () => {
        const currentProducts = [...this.state.products];
        currentProducts.sort((a, b) => (a.name.localeCompare(b.name)));
        
        this.setState({products: currentProducts})
    }

    handleSortPrice = () => {
        const currentProducts = [...this.state.products];
        // console.log(currentProducts);
        currentProducts.sort((a, b) => (a.price - b.price));
        this.setState({products: currentProducts})
    }

    filterProducts = (e) => {
        const currentProducts = [...this.state.products];
        console.log(e.target.value);
        const filtered = currentProducts.filter(product => product.name.includes(e.target.value));

        let isVisible = false;

        if(e.target.value.length===0)
        {
            isVisible = true;    
        }
        this.setState({filtered:filtered, isProductsVisible:isVisible})
    }

    render() {
        console.log(this.state.products)
        return (
            <>
            <button onClick={this.handleSortName}>Sort by name</button>
            <button onClick={this.handleSortPrice}>Sort by price</button>
            <input onChange= {this.filterProducts}></input>    
        <ul>
            {this.state.isProductsVisible && this.state.products.map(p => {
                return (
                    <li key={p.id}>
                            <Product name={p.name} onBuyClick={this.handleBuyClick} id={p.id} price={p.price}/>
                        <Tags tags={p.tags}/>
                    </li>
                )
                    })}

                    {this.state.filtered.map(p => (
                        <li key={p.id}>
                            <Product name={p.name} onBuyClick={this.handleBuyClick} id={p.id} price={p.price}/>
                        <Tags tags={p.tags}/>
                    </li>
                    ))}
                </ul>
                </>
        )
    }
}

export default ProductList;


