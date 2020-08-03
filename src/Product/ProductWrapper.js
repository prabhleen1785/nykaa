import React from "react";
import ProductCard from "./ProductCard";
import { productCardWrapper, loadMoreClass } from "./styles";

const ProductWrapper = props => {
  const { data, visible, loadMore } = props;
  return (
    <div>
      <div className={productCardWrapper}>
        {data &&
          data.slice(0, visible).map(ele => {
            // for displaying cards
            return (
              <div key={ele.id}>
                <ProductCard
                  title={ele.title}
                  subtitle={ele.subTitle}
                  imageUrl={ele.imageUrl}
                  size={ele.sizeVariation}
                />
              </div>
            );
          })}
      </div>
      {visible < data.length && (
        <button className={loadMoreClass} onClick={loadMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default ProductWrapper;
