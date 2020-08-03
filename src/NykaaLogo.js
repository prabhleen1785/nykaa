import React from "react";
import { LogoWrapper, Logo } from "./styles";
import Nykaa from "./assets/nykaa_logo.svg";

const NykaaLogo = () => {
  return (
    <div className={LogoWrapper}>
      <img className={Logo} src={Nykaa} alt="" />
    </div>
  );
};

export default NykaaLogo;
