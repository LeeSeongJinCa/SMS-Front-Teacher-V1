import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterBasic = styled.div`
  position: relative;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid black;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-right: 5px;
`;

export const ToggleBtn = styled.button<{ isActive?: boolean }>`
  width: 50px;
  border: none;
  background-color: transparent;
  transition: 250ms all;
  text-align: center;
  cursor: pointer;
  & + & {
    border-left: 0.5px solid #dddddd;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: #23b2ad;
    `}
`;

export const ResetBtn = styled.div`
  border: 0.5px solid #dddddd;
  background: transparent;
  display: flex;
`;

export const SettingType = styled.button<{ active: boolean }>`
  border: 1px solid #dddddd;
  background-color: white;
  color: #dddddd;
  font-size: 15px;
  transition: 300ms all;
  width: 50%;

  ${props =>
    props.active &&
    css`
      background-color: #5323b2;
      color: white;
      border-color: transparent;
    `}
`;

export const SelectWrap = styled.div`
  display: flex;
  margin-top: 5px;
  * {
    flex: 1;
    text-align: center;
  }
`;

export const HiddenWrap = styled.div`
  width: 140px;
  border: 2px solid #dddddd;
  padding: 10px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  align-items: center;
  top: calc(100% + 10px);
  left: -50%;

  > div {
    width: 100%;
  }
`;
