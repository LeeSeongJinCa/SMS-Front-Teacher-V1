import styled from "styled-components";

export const Container = styled.div`
  flex: 3;

  img {
    width: 100%;
  }
`;

export const HashTag = styled.div`
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 3px 5px;
  color: #888888;
  margin: 0 2px;
  display: inline-block;
`;

export const Notice = styled.div`
  > a {
    text-decoration: none;
    color: #242424;

    &:hover {
      color: #5323b2;
    }
  }
`;

export const H3 = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
`;
