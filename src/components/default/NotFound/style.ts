import styled from "styled-components";

export const NotFound = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;

export const Center = styled.div`
  transition: transform 50ms;
  text-align: center;
`;

export const NotFound404 = styled.img`
  width: 50%;
  height: 50%;
`;

export const NotFoundAnyThing = styled.h1`
  margin: 24px 0;
  font-size: 24px;
`;

export const NotFoundGoHome = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: white;
  background: #5323b2;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  > a {
    display: inline-block;
    padding: 12px 24px;
    color: white;
    text-decoration: none;
  }
`;
