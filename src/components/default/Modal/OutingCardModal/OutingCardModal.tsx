import React, { useCallback, FC } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import * as S from "./styles";

import {
  approveOutingCardSaga,
  CloseOutingCardModal,
  rejectOutingCardSaga
} from "../../../../modules/action/outingCard";
import { getOutingCardTime, padNum } from "../../../../lib/utils";
import useEndTime from "../../../../lib/hooks/useEndTime";
import useCustomSelector from "../../../../lib/hooks/useCustomSelector";

const initialState = {
  grade: 0,
  name: "",
  group: 0,
  number: 0,
  start_time: 0,
  end_time: 0,
  place: "",
  reason: "",
  outing_uuid: ""
};

const OutingCardModal: FC = () => {
  const dispatch = useDispatch();
  const {
    list,
    modalIsOpen,
    outingUuid: uuid
  } = useCustomSelector().outingCard;
  const {
    grade,
    name,
    group,
    number,
    start_time,
    end_time,
    place,
    reason,
    outing_uuid
  } = list.find(({ outing_uuid }) => outing_uuid === uuid) || initialState;
  const [date, startTime, endTime] = getOutingCardTime(start_time, end_time);
  const [
    endHour,
    endMin,
    handleEndHour,
    handleEndMin,
    onClickChangeOutTime
  ] = useEndTime(outing_uuid, start_time, end_time, endTime);

  const approveOutingCard = useCallback(() => {
    dispatch(approveOutingCardSaga(outing_uuid));
  }, [outing_uuid]);

  const rejectOutingCard = useCallback(() => {
    dispatch(rejectOutingCardSaga(outing_uuid));
  }, [outing_uuid]);

  const closeModal = useCallback(() => {
    dispatch(CloseOutingCardModal());
  }, []);

  const makeOption = (number: number, getValue: (i: number) => string) => {
    return Array(number)
      .fill(0)
      .map((_, i) => {
        const value = getValue(i);

        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      });
  };

  return (
    <>
      {modalIsOpen && (
        <S.Container>
          <ToastContainer autoClose={2000} />
          <S.Modal>
            <h1>신청정보</h1>
            <hr />
            <S.Content>
              <div>
                <div>
                  <strong>학번</strong>
                  <span>
                    {grade}
                    {group}
                    {padNum(number)}
                  </span>
                </div>
                <div>
                  <strong>이름</strong>
                  <span>{name}</span>
                </div>
                <div>
                  <strong>날짜</strong>
                  <span>{date}</span>
                </div>
                <div>
                  <strong>시간</strong>
                  <span>
                    {startTime} - {endTime}
                  </span>
                </div>
                <div>
                  <strong>장소</strong>
                  <span>{place}</span>
                </div>
                <div>
                  <strong>사유</strong>
                  <span>{reason}</span>
                </div>
              </div>
              <section>
                <p>외출 종료 시간 변경</p>
                <div>
                  <label>
                    <select value={endHour} onChange={handleEndHour}>
                      {makeOption(24, (i: number) => padNum(i))}
                    </select>
                  </label>
                  {" : "}
                  <label>
                    <select value={endMin} onChange={handleEndMin}>
                      {makeOption(6, (i: number) => padNum(i * 10))}
                    </select>
                  </label>
                  <button onClick={onClickChangeOutTime}>변경</button>
                </div>
              </section>
              <div>
                <S.Button color="#242424" onClick={approveOutingCard}>
                  승인
                </S.Button>
                <S.Button color="#FF5555" onClick={rejectOutingCard}>
                  거절
                </S.Button>
              </div>
            </S.Content>
            <S.CloseButton onClick={closeModal} />
          </S.Modal>
        </S.Container>
      )}
    </>
  );
};

export default OutingCardModal;
