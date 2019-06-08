import React from 'react'
// import basketStore from '../stores/BasketStore';
import {observer, inject} from 'mobx-react'
import BasketItem from './BasketItem';


@inject('basketStore')
@observer
class Basket extends React.Component{
    

    render() {
        const basket = this.props.basketStore.basket
        console.log(basket);
        return (
            <ul>
                {basket.map(item => (
                    <li key={Date.now() + Math.random()}>
                        <BasketItem name={item.name} price={item.price} />
                    </li>
                ))}
            </ul>
        )
    }
}



export default Basket
