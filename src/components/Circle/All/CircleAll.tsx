import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  memo,
  useEffect,
  useMemo
} from "react";
import * as S from "../Wanted/List/styles";
import { PageHeader, Category, AllCircleBox } from "../../default";
import { NavIconAllBlue } from "../../../assets";
import { Hr } from "../../../components/default/Board/styles";
import { makeFilterFunc } from "../../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { CircleInfo } from "../../../modules/type/poster";
import { apiDefault } from "../../../lib/api/client";
import { setAllFilter } from "../../../modules/action/poster";

const CircleAll: FC = () => {
  const dispatch = useDispatch();
  const { data, filterField } = useSelector((store: stateType) => ({
    data: store.clubList.clubs,
    filterField: store.poster.all.field
  }));

  const [circleCount, setCircleCount] = useState<number>(0);
  const [keyword, setkeyword] = useState<string>("");

  const filterFunc = makeFilterFunc<CircleInfo>(data, ({ name }, keyword) =>
    name.includes(keyword)
  );

  const filterData = useMemo<CircleInfo[]>(
    () => filterFunc(keyword).filter(({ field }) => filterField === field),
    [keyword, filterField]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  const filterHandler = useCallback((field: string) => {
    dispatch(setAllFilter(field));
  }, []);

  useEffect(() => {
    apiDefault()
      .get<{ count: number }>("/clubs/count")
      .then(res => {
        setCircleCount(res.data.count);
      });
  }, []);

  return (
    <S.Container>
      <PageHeader
        title="동아리 전체보기"
        imgSrc={NavIconAllBlue}
        type="DETAIL"
      />
      <Hr />
      <Category
        field={filterField}
        filterHandler={filterHandler}
        count={filterField ? filterData.length : circleCount}
        onChange={onChange}
        placeHolder="검색할 동아리 이름을 입력하세요"
      >
        동아리 수
      </Category>
      <S.BoxWrap>
        {filterField
          ? filterData.map(data => (
              <AllCircleBox key={data.club_uuid} {...data} />
            ))
          : filterFunc(keyword).map(data => (
              <AllCircleBox key={data.club_uuid} {...data} />
            ))}
      </S.BoxWrap>
    </S.Container>
  );
};

export default memo(CircleAll);
