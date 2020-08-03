import { css } from "emotion";

export const errorWrapper = css`
  display: flex;
  justify-content: center;
  color: red;
  @media only screen and (max-width: 600px) {
    margin: 0 16px 32px;
  }
`;

export const searchWrapper = css`
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin: 0 20px;
    width: calc(100% - 40px);
  }
`;
export const inputWrapper = css`
  width: 400px;
  height: 42px;
  font-size: 18px;
  padding-left: 16px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #fc2779;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 1px 10px rgba(0, 0, 0, 0.04),
    0px 4px 5px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;
export const buttonWrapper = css`
  height: 44px;
  width: 90px;
  border: 1px solid #fc2779;
  background: white;
  border-radius: 6px;
  margin-left: 8px;
  color: #fc2779;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #fc2779;
    color: white;
  }
`;

export const LogoWrapper = css`
  display: flex;
  margin: 0 100px;
  border-bottom: 1px solid #fc2779;

  @media only screen and (max-width: 600px) {
    margin: 0 20px;
  }
`;
export const Logo = css`
  height: 100px;
  width: 100px;
`;

export const scrollTopClass = css`
  position: fixed;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  bottom: 20px;
  align-items: center;
  height: 20px;
  justify-content: flex-end;
  z-index: 1000;
  width: calc(100% - 100px);
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 600px) {
    width: 40px;
    right: 8%;
    bottom: 32px;
    padding: 0px;
  }
`;

export const loadMoreClass = css`
  display: block;
  border: 0;
  margin: 6em auto;
  padding: 0.75em 1em;
  font-size: 1em;
  background-color: #fc2799;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  border: outline;
  @media only screen and (max-width: 600px) {
    margin: 2em;
    z-index: 100;
  }
`;
