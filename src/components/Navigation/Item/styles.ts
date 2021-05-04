import styled from "styled-components";
import { Link } from "react-router-dom";

export const Linker = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  cursor: pointer;
  padding: 13px 15px;
  box-sizing: border-box;
  align-items: center;

  &.active {
    background: white;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    box-shadow: -5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Img = styled.img`
  width: 15px;
  height: 15px;
`;

export const ItemName = styled.div`
  font-size: 14px;
  margin-left: 30px;
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 4px solid transparent;
  border-left: 4px solid transparent;
  border-bottom: 4px solid transparent;
`;
