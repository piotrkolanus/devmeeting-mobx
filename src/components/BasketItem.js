import React from 'react';
// import { observer } from 'mobx-react'

const BasketItem = ({ name, price }) => {
  return (
    <span>
      {name} {price}
    </span>
  );
};

export default BasketItem;
