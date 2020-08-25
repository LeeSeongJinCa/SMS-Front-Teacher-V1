import styled, { keyframes } from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

import { OutingWarningRedBase } from '../../assets';

export const OutingCommonWrap = styled.div`
  padding: 80px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  box-sizing: border-box;
`;

export const WarningWarp = styled(OutingCommonWrap)`
  padding: 24px 80px;
`;

export const WarningHead = styled.header`
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid #f7f6ff;
`;

export const WarningTitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
`;

export const WarningDescWarning = styled.p`
  padding-left: 8px;
  border-left: 2px solid #242424;
`;

export const WarningOuterList = styled.ol`
  line-height: 1.5;
  font-size: 14px;
`;

export const WarningOuterItem = styled.li`
  margin: 16px 0;
`;

export const WarningInnerItem = styled.li`
  margin: 8px 0;
  padding-left: 12px;
  > a {
    color: #5323b2;
    text-decoration: none;
  }
`;

export const ApplyWarp = styled(OutingCommonWrap)`
  position: relative;
`;

export const ApplyHead = styled.header`
  position: relative;
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid #f7f6ff;
`;

export const ApplyTitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
`;

const boxFade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const CircleAni = styled.div`
  animation: ${boxFade} infinite ease-in-out alternate;
`;

export const ApplyCircle1 = styled(CircleAni)`
  position: absolute;
  bottom: 30px;
  right: -35px;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(225deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  animation-duration: 4s;
`;

export const ApplyCircle2 = styled(CircleAni)`
  position: absolute;
  bottom: 25px;
  right: 100px;
  width: 40px;
  height: 40px;
  background-image: linear-gradient(45deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  animation-duration: 6s;
`;

export const ApplyCircle3Wrap = styled(CircleAni)`
  position: absolute;
  bottom: calc(100% - 50px);
  right: 160px;
  animation-duration: 2s;
`;

export const ApplyCircle4Wrap = styled(CircleAni)`
  position: absolute;
  bottom: 100%;
  right: 80px;
  animation-duration: 8s;
`;

export const ApplyCircle3 = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-image: linear-gradient(225deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  box-sizing: border-box;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
  }
`;

export const ApplyCircle4 = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  background-image: linear-gradient(225deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  box-sizing: border-box;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
  }
`;

export const ApplyDescWarning = styled.p`
  margin-top: 12px;
  padding-left: 8px;
  border-left: 2px solid #242424;
  > a {
    color: #5323b2;
    text-decoration: none;
    &:hover {
      color: #ff5555;
    }
  }
`;

export const ApplyForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ApplyFormItemTitle = styled.p`
  margin-top: 60px;
  margin-bottom: 4px;
  font-size: 14px;
`;

export const ApplyFormInputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border: 1px solid #888888;
  border-radius: 4px;
  &.dateWrap {
    padding-right: 20px;
  }
  &.timeWrap:first-child {
    margin-right: 12px;
  }
  &.timeWrap:last-child {
    margin-left: 12px;
  }
`;

export const FormDate = styled.div`
  width: 20%;
`;

export const FormDateText = styled.span`
  color: #dddddd;
  font-size: 14px;
  &.selected {
    color: black;
  }
`;

export const FormDateInput = styled.input`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 46px;
  height: 100%;
  border: 0;
  padding: 0;
  background-color: transparent;
`;

export const FormTime = styled.div`
  width: 45%;
`;

export const FormTimeListWrap = styled.div`
  display: flex;
`;

export const FormTimeType = styled.span`
  margin-right: 12px;
  color: #dddddd;
  font-size: 14px;
  &.selected {
    color: black;
  }
`;

export const FormTimeListImg = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const FormTimeList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  height: 125px;
  padding-left: 24px;
  overflow-y: scroll;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 16%);
  color: #dddddd;
  text-align: right;
  font-size: 16px;
  cursor: pointer;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: #5323b2;
  }
`;

export const FormTimeItem = styled.li`
  margin: 2px;
  padding: 0 16px;
  color: #828282;
  transition: 100ms ease-in-out;
  &:hover {
    color: #5323b2;
  }
`;

export const FormPlace = styled.div`
  width: 25%;
`;

export const FormPlaceInput = styled.input`
  width: 100%;
  padding: 0;
  border: 0;
  font-size: 14px;
  &::placeholder {
    color: #dddddd;
  }
`;

export const FormReason = styled.div`
  width: 30%;
`;

export const FormReasonTextarea = styled(TextareaAutosize)`
  width: 100%;
  border: 0;
  padding: 0;
  font-size: 14px;
  resize: none;
  &::placeholder {
    color: #dddddd;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

export const FormReasonSick = styled.div`
  span {
    color: #5323b2;
    cursor: pointer;
  }
`;

export const FormReasonSickDesc = styled.div`
  position: relative;
  width: 100%;
  font-size: 12px;
  padding: 8px;
  padding-right: 24px;
  border: 1px solid #dddddd;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 16%);
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: url(${OutingWarningRedBase}) no-repeat;
    background-size: contain;
  }
`;

export const FormButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #dddddd;
`;

const FormButtonCommon = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  font-size: 20px;
  transition: 50ms ease-in-out;
  &:active {
    transform: scale(0.9);
  }
`;

export const FormButtonCancel = styled(FormButtonCommon)`
  width: 12%;
  border: 1px solid black;
  color: #242424;
  background-color: white;
`;

export const FormButtonSubmit = styled(FormButtonCommon)`
  width: 12%;
  color: white;
  background-color: #5323b2;
`;

export const FormSubmitModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 24px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 16%);
  background-color: white;
  cursor: all-scroll;
  user-select: none;
`;

export const FormSubmitModalText = styled.p`
  margin: 4px 0;
`;

export const FormSubmitModalCancelButton = styled(FormButtonCommon)`
  padding: 4px 16px;
  border: 1px solid black;
  color: #242424;
  background-color: white;
  font-size: 16px;
`;

export const FormSubmitModalSubmitButton = styled(FormButtonCommon)`
  padding: 4px 16px;
  color: white;
  background-color: #5323b2;
  font-size: 16px;
`;

export const HistoryWarp = styled(OutingCommonWrap)``;