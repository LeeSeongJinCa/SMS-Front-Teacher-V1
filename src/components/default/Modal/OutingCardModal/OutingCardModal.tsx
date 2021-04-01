import React, { useCallback, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import * as S from "./styles";

import { stateType } from "../../../../modules/reducer";
import {
  approveOutingCardSaga,
  CloseOutingCardModal,
  rejectOutingCardSaga
} from "../../../../modules/action/outingCard";
import { getOutingCardTime, padNum } from "../../../../lib/utils";
import useEndTime from "../../../../lib/hooks/useEndTime";

const OutingCardModal: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, data } = useSelector((state: stateType) => ({
    data: state.outingCard.list.find(
      ({ outing_uuid }) => outing_uuid === state.outingCard.outingUuid
    ) || {
      outing_uuid: "",
      name: "",
      grade: 0,
      group: 0,
      number: 0,
      place: "",
      reason: "",
      start_time: 0,
      end_time: 0,
      outing_situation: "",
      outing_status: "",
      is_late: false
    },
    isOpen: state.outingCard.modalIsOpen
  }));
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
  } = data;
  const [date, startTime, endTime] = getOutingCardTime(start_time, end_time);
  const [
    endHour,
    endMin,
    handleEndHour,
    handleEndMin,
    onClickChangeOutTime
  ] = useEndTime(outing_uuid, start_time, end_time, endTime);

  const approveOutingCard = useCallback(() => {
    dispatch(approveOutingCardSaga(data.outing_uuid));
  }, [data.outing_uuid]);
  const rejectOutingCard = useCallback(() => {
    dispatch(rejectOutingCardSaga(data.outing_uuid));
  }, [data.outing_uuid]);

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
      {isOpen && (
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
                    {`${number}`.padStart(2, "0")}
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
                    오후 {startTime} - {endTime}
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
                  <span>오후</span>
                  <label>
                    <select value={endHour} onChange={handleEndHour}>
                      {makeOption(5, (i: number) => padNum(i + 4))}
                    </select>
                  </label>
                  {" : "}
                  <label>
                    <select value={endMin} onChange={handleEndMin}>
                      {makeOption(6, (i: number) => padNum(i * 10))}
                    </select>
                  </label>
                </div>
                <button onClick={onClickChangeOutTime}>변경</button>
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
