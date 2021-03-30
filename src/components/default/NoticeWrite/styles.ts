import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 70px;
  padding-bottom: 20px;
`;

export const TitleInput = styled.input`
  color: #888888;
  border: none;
  font-size: 15px;
`;

export const Hr = styled.hr`
  border-top: 1px solid #888888;
  margin: 15px 0;
`;

export const EditerBackground = styled.div`
  background-color: #eef5fa;
  padding: 10px;
  box-sizing: border-box;
`;

export const Editer = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 1px rgb(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20px 100px;
`;

export const Footer = styled.div`
  padding: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button<{
  color: string;
  backgroundColor: string;
  borderColor: string;
}>`
  &:nth-child(1) {
    margin-right: 10px;
  }
  font-size: 15px;
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  padding: 5px 20px;
  transition: 300ms all;

  &:hover {
    border: 1px solid ${props => props.backgroundColor};
    color: ${props => props.backgroundColor};
    background-color: ${props => props.color};
  }
`;
