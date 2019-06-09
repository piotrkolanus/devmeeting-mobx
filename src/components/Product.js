import React from 'react';
import { observer } from 'mobx-react';

const Product = ({ name, onBuyClick, id, price }) => {
  const handleClick = () => {
    onBuyClick(id);
  };
  return (
    <>
      <span>
        {name} {price}
      </span>
      <button onClick={handleClick}>Buy</button>
    </>
  );
};

export default observer(Product);
