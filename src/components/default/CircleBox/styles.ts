import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  margin: 8px;
  border: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.5s, background-color 1s;
  white-space: pre-wrap;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.7s opacity;
    object-fit: cover;
  }

  &:hover {
    & > img {
      opacity: 0.13;
    }
    transform: translateY(-15px);
    color: white;
    background-color: #5323b2;
  }

  > div:nth-child(1) {
    flex: 1;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CircleName = styled.div`
  font-weight: bolder;
`;

export const CircleIntroduce = styled.div`
  height: 40px;
  margin-top: 1px;
`;

export const WantedJob = styled.div`
  font-size: 14px;
  margin-top: 25px;
`;

export const DateWrap = styled.div`
  div,
  span {
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  > div:nth-child(1) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

export const Date = styled.div`
  & > & {
    display: flex;
    justify-content: space-between;
  }
`;

export const Field = styled.div`
  font-weight: bold;
`;
