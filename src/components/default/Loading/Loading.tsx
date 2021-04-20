import React, { FC } from "react";
import styled from "styled-components";

import { Spinner } from "../../../assets";

interface Props {
  size?: string;
}

const SpinnerWrap = styled.img<Props>`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

const Loading: FC<Props> = ({ size = "40px" }) => {
  return (
    <SpinnerWrap src={Spinner} alt="loading" title="loading" size={size} />
  );
};

export default Loading;
