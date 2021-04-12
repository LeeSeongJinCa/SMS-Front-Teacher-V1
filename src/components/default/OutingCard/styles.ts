import styled, { css, keyframes } from "styled-components";

export const LateAnimate = keyframes`
  0%,50% {
    stroke:black;
  }

  51%,100% {
    stroke:red;
  }
`;

export const Container = styled.div`
  height: 240px;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  display: inline-flex;
  margin: 10px;
  padding: 30px;
  flex-direction: column;
  transition: 0.25s background;
  cursor: pointer;

  &:hover {
    background: #dddddd;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 0px;

  border-top: 5px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  display: none;
`;

export const LateIconWrap = styled.div<{ name: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    width: 33px;
    height: 33px;
  }

  &::before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 200;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 30px;
    border: 1px solid #dddddd;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
    display: none;
  }

  ${({ name }) => {
    if (name === "지각")
      return css`
        &::before {
          content: "지각";
        }
        svg {
          animation: ${LateAnimate} 1.5s infinite linear;
        }
      `;
    else if (name === "긴급 외출")
      return css`
        &::before {
          content: "긴급 외출";
        }
      `;
  }}
  &:hover {
    ${Arrow} {
      display: block;
    }

    &::before {
      display: flex;
    }
  }
  margin-right: 10px;
`;

export const EmergencyIconWrap = styled(LateIconWrap)`
  width: 25px;
  height: 25px;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Bar = styled.div`
  margin-left: 20px;
  background: transparent;

  & + div {
    font-weight: bold;
  }
`;

export const FullBar = styled.div`
  height: 19px;
  border-right: 1.5px solid #000000;
`;
