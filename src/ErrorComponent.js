import React from "react";
import { errorWrapper } from "./styles";

const ErrorComponent = props => {
  const { errorMessage } = props;
  return (
    <div className={errorWrapper}>
      {errorMessage && (
        <div className={errorWrapper}>
          Oops!! This product is not present. You can check other products.
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;
