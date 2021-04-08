import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #dddddd;
  > * {
    margin-left: 16px;
  }
`;

export const Account = styled(Link)`
  border: 0;
  color: #ff5555;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`;

export const UserInfo = styled.span`
  display: inline-block;
  font-size: 14px;
`;

export const MovePageWithLink = styled(Link)`
  display: inline-block;
  color: #838383;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const MoveClubManagement = styled.span`
  display: inline-block;
  margin: 0 16px;
  padding: 4px 12px;
  border-radius: 4px;
  color: white;
  background-color: #10012e;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;
