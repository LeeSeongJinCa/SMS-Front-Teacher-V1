import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  width: calc(100% + 20px);
  transform: translateX(-10px);
  border-bottom: 2px solid #dddddd;
  position: relative;
  z-index: 1;
`;

export const HeaderText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const RefreshIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: cover;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  transition: 250ms all;

  &:hover {
    background-color: rgb(226, 226, 226);
  }
`;

export const EmptyList = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const CardContainer = styled.div`
  height: 700px;
  overflow-y: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 5px;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const MoreBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0;
  font-weight: bold;
  padding: 10px 0;
  transition: 125ms all;

  &:hover {
    background-color: rgb(217, 217, 217);
  }
`;
