import React from "react";
import { sizeWrapper, sizeComma } from "./styles";

const SizeComponent = props => {
  const { size } = props;
  return size.map((ele, index) => {
    return (
      <div key={index} className={sizeWrapper}>
        {ele.title}
        {index < size.length - 1 ? <span className={sizeComma}>,</span> : null}
      </div>
    );
  });
};

export default SizeComponent;
