import styled, { css } from "styled-components";

export const Container = styled.div<{
  isActive: boolean;
  isClose: boolean;
}>`
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
  width: 0;
  z-index: 2;
  transition: width 0.3s, opacity 0.3s;
  opacity: 0;
  ${props =>
    props.isActive &&
    css`
      border-right: 1px solid #dddddd;
      width: 15vw;
      height: 100%;
      padding: 200px 0 0 30px;
      opacity: 1;
    `};

  ${props =>
    props.isClose &&
    css`
      min-width: 0px;
      width: 55px;
      padding-top: 200px;
      padding-left: 0;
      text-align: center;
    `};

  .active {
    font-weight: bold;
    color: #23b2ad;
  }
`;

export const CenterImg = styled.img<{ isClose: boolean }>`
  position: absolute;
  top: 50%;
  right: 20px;
  transition: 0.3s;
  transform: translateY(-50%);

  ${props =>
    props.isClose &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `}
`;

export const HeaderText = styled.div`
  font-size: 25px;
  color: black;
  font-weight: bolder;
`;
