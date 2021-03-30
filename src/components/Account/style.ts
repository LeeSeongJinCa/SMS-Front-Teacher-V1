import styled from "styled-components";

export const AccountWrap = styled.div`
  width: 30%;
  margin: 100px auto 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700px;
  text-align: center;
`;

export const InputLabel = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
  label {
    cursor: pointer;
  }
`;

export const InputWrap = styled.div`
  padding: 4px 8px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  background: white;
  &.disabled {
    background: #e4e4e4;
    cursor: pointer;
  }
  input {
    width: 100%;
    padding: 4px 0;
    border: 0;
    box-sizing: border-box;
  }
`;

export const Checkbox = styled.input`
  &[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ApplyButton = styled.button`
  width: 100%;
  margin-top: 36px;
  padding: 10px 12px;
  border: 0;
  color: white;
  background-color: #26b1ad;
  font-size: 14px;
  box-sizing: border-box;
`;
