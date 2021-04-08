import styled from "styled-components";

export const MyPageWrap = styled.main`
  width: 30%;
  margin: 100px auto 0;
  > h1 {
    font-size: 22px;
    font-weight: bold;
  }
  > div {
    margin-top: 32px;
    padding: 24px;
    border: 1px solid #e2e2e2;
    > div {
      > label {
        display: block;
        width: 100%;
        font-size: 16px;
        margin: 12px 0;
        cursor: pointer;
        &:first-child {
          margin-top: 52px;
        }
        > p {
          color: #242424;
          font-size: 16px;
        }
        > input {
          width: 100%;
          margin: 0;
          padding: 4px 0;
          border: 0;
          border-bottom: 2px solid #00000012;
          color: #838383;
          background-color: transparent;
          font-size: 14px;
          box-sizing: border-box;
        }
      }
    }
    > button {
      color: white;
      margin-top: 12px;
      padding: 4px 8px;
      background-color: #26b1ad;
      border: 1px solid #aaaaaa;
      box-shadow: 0 3px 5px #24242424;
      border-radius: 4px;
    }
  }
`;

export const InputWrap = styled.div`
  position: relative;
  margin: 52px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  &.focused ~ #line {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 12px;
  color: #ff5555;
`;

export const Text = styled.span`
  position: absolute;
  top: -20px;
  left: -4px;
  transform: scale(0.8) translateY(-50%);
  color: #888888;
  user-select: none;
  cursor: pointer;
`;

export const Eye = styled.img`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

interface LineBackColor {
  bgColor: string;
}

export const InputLine = styled.span<LineBackColor>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background-color: ${({ bgColor }) => bgColor};
  transition: 500ms;
`;

export const InputDefaultLine = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #00000012;
`;
