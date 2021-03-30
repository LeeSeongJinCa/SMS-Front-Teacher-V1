import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

import OutingCard from "../OutingCard/OutingCard";
import OutingCardFilter from "../Filter/OutingCardFilter";
import OutingCardModal from "../Modal/OutingCardModal/OutingCardModal";
import { stateType } from "../../../modules/reducer";
import {
  OutingCardFilter as OutingCardFilterType,
  ReqOutingCardFilter
} from "../../../lib/api/payloads/OutingCard";
import { getOutingCardListSaga } from "../../../modules/action/outingCard";

interface Props {
  title: string;
  status: number;
  isClicked: (...arg: any) => void;
}

const OutingCardPage: FC<Props> = ({ title, isClicked, status }) => {
  const data = useSelector((state: stateType) => state.outingCard.list);
  const dispatch = useDispatch();

  const filterChangeHandler = useCallback(
    (data: OutingCardFilterType) => {
      if (
        data.floor === undefined &&
        data.grade === undefined &&
        data.group === undefined
      )
        return;
      const deleteObj = Object.keys(data).reduce((state: {}, now: string) => {
        if (!data[now]) {
          return state;
        }
        return { ...state, [now]: data[now] };
      }, {});

      const filterData: ReqOutingCardFilter = {
        ...deleteObj,
        status
      };
      dispatch(getOutingCardListSaga(filterData));
    },
    [status]
  );

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>{title}</S.HeaderText>
        <OutingCardFilter onChange={filterChangeHandler} />
      </S.Header>
      <S.CardContainer>
        {data.length ? (
          data.map(data => (
            <OutingCard
              key={data.outing_uuid}
              {...data}
              isClicked={isClicked}
            />
          ))
        ) : (
          <S.EmptyList>{title}이 존재하지 않습니다.</S.EmptyList>
        )}
      </S.CardContainer>
      <OutingCardModal />
    </S.Container>
  );
};

export default OutingCardPage;
