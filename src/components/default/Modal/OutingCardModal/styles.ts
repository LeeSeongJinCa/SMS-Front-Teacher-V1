import styled from "styled-components";
import { ModalClose } from "../../../../assets";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.25);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1000px;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.25);
  width: 730px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px 70px;

  h1 {
    font-size: 28px;
    font-weight: bolder;
  }

  hr {
    border-top: 2px solid #f7f6ff;
  }
`;

export const Content = styled.div`
  > div {
    margin-top: 5px;
  }
  > div:nth-child(1) {
    flex: 7;
  }
  > div:nth-child(2) {
    flex: 3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  strong {
    font-weight: bold;

    & + * {
      margin-left: 20px;
    }
  }
  display: flex;
`;

export const Button = styled.button<{ color: string }>`
  padding: 5px 23px;
  background: ${props => props.color};
  color: white;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.1);

  & + & {
    margin-left: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  border: none;
  background: url(${ModalClose}) no-repeat;
  background-size: cover;
  font-size: 40px;
  width: 20px;
  height: 20px;
`;
