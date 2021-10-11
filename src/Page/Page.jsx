import React from "react";
import styled, { css } from "styled-components";

const StyeldPage = styled.div`
  width: 100%;
  height: 100%;

  ${props => {
    const { width } = props;
    const backgroundColor = width < 720 ? "red" : "blue";
    console.log(width, backgroundColor);

    return css`
      background: ${backgroundColor};
    `;
  }}
`;

const Page = ({ width }) => {
  return <StyeldPage width={width}>Hello Word :D</StyeldPage>;
};

export default Page;
