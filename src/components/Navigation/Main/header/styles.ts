import styled from "styled-components";

export const LogoText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  color: white;
  font-weight: bolder;
`;

export const InnerContainer = styled.div`
  > a {
    margin-left: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  position: relative;
  z-index: 2;
`;

export const LogoImg = styled.img`
  width: 34px;
  height: 22px;
`;
