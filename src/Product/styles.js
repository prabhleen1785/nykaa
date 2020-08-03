import { css } from "emotion";

export const productWrapper = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #fc2779;
  border-radius: 12px;
  width: 182px;
  height: 270px;
  padding: 16px;
  margin: 12px;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 18px -2px #c3baba;
  &:hover {
    box-shadow: 0px 0px 22px 1px #c3baba;
  }
  @media only screen and (max-width: 600px) {
    width: 160px;
    padding: 0px;
    height: 290px;
    margin: 0 4px 16px 4px;
  }
`;
export const imageWrapper = css`
  height: 160px;
  width: 178px;
  background-repeat: no-repeat;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
  @media only screen and (max-width: 600px) {
    width: 160px;
  }
`;
export const upperSectionWrapper = css`
  height: 160px;
`;
export const lowerSectionWrapper = css`
  display: flex;
  flex-direction: column;
  width: 178px;
  max-height: 100px;
  margin-top: 8px;
  @media only screen and (max-width: 600px) {
    width: 144px;
    padding: 0 8px;
    max-height: 114px;
  }
`;
export const titleWrapper = css`
  font-size: 18px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const subtitleWrapper = css`
  font-size: 14px;
  padding-top: 4px;
  color: #696363;
  @media only screen and (max-width: 600px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const sizeWrapper = css`
  font-size: 14px;
  display: flex;
  flex-flow: wrap;
  padding-top: 6px;
`;
export const productCardWrapper = css`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-left: 15%;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: calc(100% - 16px);
    margin: 0 0 0 8px;
  }
`;
export const errorWrapper = css`
  display: flex;
  justify-content: center;
  color: red;
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
  font-family: $sans;
  cursor: pointer;
  outline: none;
  @media only screen and (max-width: 600px) {
    margin: 2em auto;
  }
`;

export const sizeComma = css`
  margin-right: 2px;
`;
