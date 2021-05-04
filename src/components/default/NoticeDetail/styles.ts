import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 70px;
`;

export const P = styled.p`
  margin: 15px 0;
  font-size: 20px;
`;

export const Button = styled.button<{ color: string; backgroundColor: string }>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 1px solid #dddddd;
  font-size: 15px;
  padding: 8px 33px;

  &:nth-child(2) {
    margin-left: 10px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;
`;
