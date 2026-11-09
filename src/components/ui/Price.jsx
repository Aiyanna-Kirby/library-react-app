import React from "react";

const Price = ({ salePrice, originalPrice}) => {
  return (
    <div className="book__price">
      {salePrice != null ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          <span>${salePrice.toFixed(2)}</span>
        </>
      ) : (
        <span>${originalPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

export default Price;
