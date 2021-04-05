import styled from "styled-components";

export const BannerWrap = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  background-color: #feffbf;
  font-size: 14px;
  box-sizing: border-box;
  transition: 300ms;
  &.close {
    transform: translateY(-100%);
  }
  p {
    display: inline-block;
    > a {
      color: #277bc8;
      text-decoration: none;
    }
  }
  > label {
    float: right;
    display: flex;
    align-items: center;
    cursor: pointer;
    > input {
      cursor: pointer;
    }
  }
  > span {
    color: #1970c6;
    float: right;
    margin: 0 12px;
    cursor: pointer;
  }
`;
