import styled from "styled-components";

type TestContainerType = {
  top: string;
  left: string;
};

export const TestContainerBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 30%);
`;

export const TestContainer = styled.div<TestContainerType>`
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  /* top: 170px; */
  /* left: calc(15vw + 15px); */
  padding: 20px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 3px 5px #24242424;
  z-index: 3;
  transition: 500ms;
  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 15px 15px 15px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    left: -15px;
    top: 45px;
  }
  > ul {
    display: flex;
    width: 100%;
    margin-top: 20px;
    > li {
      flex: 1;
      height: 10px;
      outline: 1px solid #f2f2f2;
      &.prev {
        background-color: #8ab4f8;
      }
    }
  }
  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    > span {
      color: #525252;
      font-size: 12px;
    }
  }
  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    > p {
      color: #5323b2;
      font-size: 12px;
      cursor: pointer;
    }
    button {
      border: 1px solid #e2e2e2;
      padding: 10px 16px;
      border-radius: 20px;
      color: #525252;
      background-color: transparent;
      &:hover {
        color: #242424;
        background-color: #e2e2e2;
      }
    }
  }
`;
