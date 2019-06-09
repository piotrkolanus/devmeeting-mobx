import React from 'react';

const PromotedProduct = ({ name }) => {
  const style = {
    color: 'red'
  };
  return <span style={style}>{name}</span>;
};

export default PromotedProduct;
