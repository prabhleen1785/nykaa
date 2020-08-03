import React from "react";
import SizeComponent from "./SizeComponent";
import {
  productWrapper,
  upperSectionWrapper,
  lowerSectionWrapper,
  titleWrapper,
  subtitleWrapper,
  sizeWrapper,
  imageWrapper
} from "./styles";

const ProductCard = props => {
  const { title, imageUrl, subtitle, size } = props;
  return (
    <div className={productWrapper}>
      <div className={upperSectionWrapper}>
        <img className={imageWrapper} src={imageUrl} alt="" />
      </div>
      <div className={lowerSectionWrapper}>
        <div className={titleWrapper}>{title}</div>
        <div className={subtitleWrapper}>{subtitle}</div>
        <div className={sizeWrapper}>
          <SizeComponent size={size} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
