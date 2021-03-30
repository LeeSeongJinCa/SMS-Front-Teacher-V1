import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  useEffect
} from "react";
import * as S from "./styles";
import { PageHeader, Category } from "../../../../components/default";
import { NavIconCircleBlue } from "../../../../assets";
import { WantedCircleBox } from "../../../../components/default";
import { makeFilterFunc, customSelector } from "../../../../lib/utils";
import { Hr } from "../../../../components/default/Board/styles";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { apiDefault } from "../../../../lib/api/client";
import { setWantedFilter } from "../../../../modules/action/poster";
import { RecruitmentListItem } from "../../../../lib/api/payloads/Recruitment";

const CircleWanted: FC = () => {
  const dispatch = useDispatch();
  const { data, field } = useSelector((state: stateType) => ({
    data: state.recruitmentList.recruitments,
    field: state.poster.wanted.field
  }));
  const [keyword, setkeyword] = useState<string>("");
  const [circleCount, setCircleCount] = useState<number>(0);
  const filterFunc = makeFilterFunc<RecruitmentListItem>(
    data,
    ({}, keyword) => true
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  const filterHandler = useCallback((field: string) => {
    dispatch(setWantedFilter(field));
  }, []);

  useEffect(() => {
    apiDefault()
      .get<{ count: number }>("/recruitments/count")
      .then(res => {
        setCircleCount(res.data.count);
      });
  }, []);

  return (
    <S.Container>
      <PageHeader
        title="동아리 모집"
        imgSrc={NavIconCircleBlue}
        type="DETAIL"
      />
      <Hr />
      <Category
        field={field}
        filterHandler={filterHandler}
        onChange={onChange}
        count={circleCount}
        placeHolder="검색할 동아리 이름을 입력하세요"
      >
        현재 모집중
      </Category>
      <S.BoxWrap>
        {filterFunc(keyword).map(data => (
          <WantedCircleBox
            key={data.club_uuid}
            filterField={field}
            filterName={keyword}
            {...data}
          />
        ))}
      </S.BoxWrap>
    </S.Container>
  );
};

export default CircleWanted;
