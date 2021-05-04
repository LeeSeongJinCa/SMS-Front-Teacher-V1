import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;

export const MainContentCommon = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const MainContentTitleCommon = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Schedule = styled(MainContentCommon)`
  flex: 1;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const ScheduleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px 8px 12px;
`;

export const ScheduleHeaderDateSetting = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin: 0 8px;
    font-size: 14px;
  }
`;

export const TimetableChangerCommon = styled.div`
  width: 0px;
  height: 0px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  cursor: pointer;
`;

export const TimetableChangerLeft = styled(TimetableChangerCommon)`
  border-right: 8px solid transparent;
  border-right-color: gray;
`;

export const TimetableChangerRight = styled(TimetableChangerCommon)`
  border-left: 8px solid transparent;
  border-left-color: gray;
`;

export const ScheduleDetail = styled(MainContentCommon)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;
`;

export const DetailHeader = styled.header`
  padding: 8px 4px 8px 12px;
  border-bottom: 2px solid #dddddd;
`;

export const DetailHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailTitle = styled(MainContentTitleCommon)``;

export const DetailAddSchedule = styled.button`
  position: relative;
  padding: 4px 6px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  transition: 300ms;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const DetailHead = styled.p`
  margin-top: 16px;
  font-size: 12px;
  font-weight: bold;
`;

export const DetailHeadData = styled.span`
  display: inline-block;
  margin-right: 4px;
  &:first-child {
    width: 50%;
  }
  &:last-child {
    width: 25%;
  }
`;

export const DetailBody = styled.div`
  height: 470px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #23b2ad;
    border-radius: 16px;
  }
`;

export const DetailLoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const DetailBodyItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 4px 8px 12px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  font-size: 12px;
  &.prev {
    color: #888888;
    background-color: #fbfbfb;
    opacity: 0.5;
  }
`;

export const DetailBodyItemData = styled.span`
  display: inline-block;
  margin-right: 4px;
  &:first-child {
    width: 50%;
  }
  &:nth-child(2) {
    width: 25%;
  }
`;

export const DetailBodyItemButtonWrap = styled.div`
  flex: 1;
`;

export const DetailBodyItemButton = styled.button`
  padding: 4px 8px;
  border: 0;
  border-radius: 4px;
  background: #1a73e8;
  color: white;
  font-size: 10px;
  transition: 0.2s;
  &:first-child {
    margin-right: 4px;
    background-color: #038fff;
  }
  &:last-child {
    background-color: #ff5555;
  }
  &:hover {
    opacity: 0.7;
  }
`;
