import React, {
  FC,
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState
} from "react";
import * as S from "./styles";
import { useHistory } from "react-router";
import { HashTag } from "../Info/Body/Sub/styles";
import { CircleInfo, WantedInfo } from "../../../modules/type/poster";
import { apiDefault, getStudentData } from "../../../lib/api/client";
import { getImgUrl } from "../../../lib/utils";
import { StudentInfo } from "../../../modules/type/user";
import { RecruitmentListItem } from "../../../lib/api/payloads/Recruitment";

const dateParse = (
  startDateStr: string,
  endDateStr: string
): ReactElement | string => {
  if (!endDateStr) return <S.Date>상시채용</S.Date>;
  const [endYear, endMonth, endDate] = endDateStr.split("-");
  return (
    <S.Date>
      <div>{startDateStr}</div>
      <S.Date>
        <span>-</span>
        <span>
          {endMonth}-{endDate}
        </span>
      </S.Date>
    </S.Date>
  );
};

interface Props extends RecruitmentListItem {
  filterField: string;
  filterName: string;
}

const WantedCircleBox: FC<Props> = ({
  club_uuid,
  end_period,
  recruit_concept,
  recruitment_uuid,
  recruit_members,
  start_period,
  filterName,
  filterField
}) => {
  const [circleInfo, setCircleInfo] = useState<CircleInfo | null>(null);

  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push(`/circles/wanted/${recruitment_uuid}`);
  }, []);

  useEffect(() => {
    apiDefault()
      .get(`/clubs/uuid/${club_uuid}`)
      .then(res => {
        setCircleInfo(res.data);
      });
  }, []);

  const render = useCallback((): ReactElement => {
    if (
      !circleInfo ||
      !circleInfo.name.includes(filterName) ||
      (filterField && circleInfo.field !== filterField)
    )
      return <></>;

    return (
      <S.Container onClick={handleClick}>
        <div>
          <S.Header>
            <S.CircleName>{circleInfo.name}</S.CircleName>
            <div>{circleInfo.location}</div>
          </S.Header>
          <S.CircleIntroduce>{recruit_concept}</S.CircleIntroduce>
          <S.WantedJob>
            {recruit_members.map(({ field, grade, number }) => (
              <div key={`${field}-${number}`}>
                -{grade}학년 {field}분야 {number}명
              </div>
            ))}
          </S.WantedJob>
        </div>
        <S.Footer>
          <div>
            <div>
              <HashTag>{circleInfo.field}</HashTag>
            </div>
          </div>
          <S.DateWrap>{dateParse(start_period, end_period)}</S.DateWrap>
        </S.Footer>
        <img src={getImgUrl(circleInfo.logo_uri)} />
      </S.Container>
    );
  }, [circleInfo, filterName, filterField]);

  return render();
};

export default memo(WantedCircleBox);
