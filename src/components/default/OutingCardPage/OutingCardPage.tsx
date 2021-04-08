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
import {
  addOutingCardListSaga,
  getOutingCardListSaga
} from "../../../modules/action/outingCard";

interface Props {
  title: string;
  status: number;
  isClicked: (...arg: any) => void;
}

const OutingCardPage: FC<Props> = ({ title, isClicked, status }) => {
  const { data, readMore } = useSelector((state: stateType) => ({
    data: state.outingCard.list,
    readMore: state.outingCard.readMore
  }));
  const [filterState, setFilterState] = useState<ReqOutingCardFilter>({
    status
  });
  const [startCount, setStartCount] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutingCardListSaga(filterState));
  }, [
    filterState.floor,
    filterState.grade,
    filterState.group,
    filterState.status
  ]);

  useEffect(() => {
    if (startCount === 0) return;
    dispatch(addOutingCardListSaga({ ...filterState, start: startCount }));
  }, [startCount]);

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

      setFilterState(filterData);
      setStartCount(0);
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

  const getMoreCard = useCallback(() => {
    setStartCount(prev => prev + 8);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>{title}</S.HeaderText>
        <OutingCardFilter onChange={filterChangeHandler} />
      </S.Header>
      <S.CardContainer>{displayOutingCard}</S.CardContainer>
      {readMore && <S.MoreBtn onClick={getMoreCard}>더보기</S.MoreBtn>}
      <OutingCardModal />
    </S.Container>
  );
};

export default OutingCardPage;
