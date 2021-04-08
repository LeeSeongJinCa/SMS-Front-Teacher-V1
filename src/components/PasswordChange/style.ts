import styled from "styled-components";

export const PasswordChangeWrap = styled.div`
  width: 30%;
  margin: 100px auto 0;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

export const InputWrap = styled.div`
  margin-top: 32px;
  padding: 24px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const WarningMessage = styled.p`
  margin: 48px 0;
  color: #888888;
  font-size: 14px;
`;

export const PasswordInputWrap = styled.div`
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
  &.focused ~ #text {
    top: -20px;
    left: -8px;
    transform: scale(0.8);
  }
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
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #888888;
  user-select: none;
  transition: 300ms;
  cursor: text;
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

export const ChangeButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ChangeButton = styled.button`
  padding: 4px 8px;
  border: 0;
  border-radius: 4px;
  color: white;
  background-color: #038fff;
  box-shadow: 0 3px 5px #12341234;
  transition: 300ms;
  &:hover,
  &:focus {
    background-color: #00aaff;
  }
  &:active {
    transform: scale(0.96);
  }
`;
