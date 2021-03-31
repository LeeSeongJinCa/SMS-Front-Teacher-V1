import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
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

  const getFilterData = useCallback(() => {
    const list = data.filter(outing => {
      const time = +new Date();
      if (outing.end_time * 1000 < time) return false;
      return true;
    });

    return list;
  }, [data]);

  const displayOutingCard = useMemo(() => {
    const filterData = getFilterData();
    let displayData: typeof data = [];

    if (title === "승인대기 외출증") {
      if (filterData.length === 0) {
        return <S.EmptyList>{title}이 존재하지 않습니다.</S.EmptyList>;
      }

      displayData = filterData;
    } else {
      if (data.length === 0) {
        return <S.EmptyList>{title}이 존재하지 않습니다.</S.EmptyList>;
      }

      displayData = data;
    }

    return displayData.map(data => (
      <OutingCard key={data.outing_uuid} {...data} isClicked={isClicked} />
    ));
  }, [data, title]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>{title}</S.HeaderText>
        <OutingCardFilter onChange={filterChangeHandler} />
      </S.Header>
      <S.CardContainer>{displayOutingCard}</S.CardContainer>
      <OutingCardModal />
    </S.Container>
  );
};

export default OutingCardPage;
