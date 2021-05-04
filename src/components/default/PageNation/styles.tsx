import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
`;

export const PageButton = styled(Link)`
  width: 30px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  height: 30px;
  border: 1px solid #d3d3d3;
  color: black;
  background-color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 300ms all;

  & + & {
    margin-left: 10px;
  }

  &.active,
  &:hover {
    background-color: black;
    border-color: black;
    color: white;
  }
`;

export const MovePage = styled.span<{ rotate?: number }>`
  display: inline-block;
  border-bottom: 6px solid #979797;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  transform: rotate(${props => props.rotate || 0}deg);
`;
