import styled from "styled-components";

export const AccountWrap = styled.div`
  width: 30%;
  margin: 100px auto 0;
  h1 {
    font-size: 24px;
    font-weight: 700px;
    text-align: center;
  }
  h3 {
    margin: 19px 0 8px;
    font-size: 14px;
    font-weight: 700;
    label {
      cursor: pointer;
    }
  }
  .a {
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
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
    cursor: pointer;
  }
  select {
    width: 100%;
    border: 0;
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
  }
  button {
    width: 100%;
    margin-top: 36px;
    padding: 10px 12px;
    border: 0;
    color: white;
    background-color: #26b1ad;
    font-size: 14px;
    box-sizing: border-box;
  }
`;
