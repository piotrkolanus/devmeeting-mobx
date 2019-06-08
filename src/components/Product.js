import React from 'react'

const Product = ({ name, onBuyClick, id, price }) => {
    const handleClick = () => {
        onBuyClick(id);
    }
    return (
        <>
        <span>
            {name} {price}
        </span>
            <button onClick={handleClick}>Buy</button>
        </>
    )
}



export default Product
