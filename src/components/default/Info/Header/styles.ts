import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: flex-end;
    > p {
      margin-left: 10px;
      transform: translateY(-5px);
    }
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const DateWrap = styled.div`
  div,
  span {
    font-weight: bold;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const FaceBookBtn = styled.a`
  background: #517aff;
  border: none;
  text-decoration: none;
  border-radius: 3px;
  padding: 10px 15px;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    margin-right: 5px;
  }
`;
