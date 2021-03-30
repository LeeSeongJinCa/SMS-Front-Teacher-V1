import React, { memo, useCallback } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import { getOutingCardTime } from "../../../lib/utils";
import { OutingCard } from "../../../modules/action/outingCard";

interface Props extends ResOutingCardListItem {
  isClicked: (uuid: string) => void;
}

const OutingCard: FC<Props> = ({
  end_time,
  place,
  outing_uuid,
  number,
  name,
  grade,
  group,
  isClicked,
  start_time,
  arrival_time,
  outing_situation
}) => {
  const [dateInfo, startTime, endTime] = getOutingCardTime(
    start_time,
    end_time
  );

  return (
    <S.Container onClick={() => isClicked(outing_uuid)}>
      <S.Header>
        <div>
          {grade}
          {group}
          {`${number}`.padStart(2, "0")} {name}
        </div>
        <S.RightHeader>
          {outing_situation === "EMERGENCY" ? (
            <S.EmergencyIconWrap name="긴급 외출">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
              >
                <g
                  id="그룹_450"
                  data-name="그룹 450"
                  transform="translate(0 -0.096)"
                >
                  <path
                    id="다각형_10"
                    data-name="다각형 10"
                    d="M6.5,0,13,11H0Z"
                    transform="translate(0 0.096)"
                    fill="#f55"
                  />
                  <text
                    id="_"
                    data-name="!"
                    transform="translate(8 10.096)"
                    fill="#fff"
                    font-size="9"
                    font-family="NotoSansCJKkr-Medium, Noto Sans CJK KR"
                    font-weight="500"
                    letter-spacing="-0.02em"
                  >
                    <tspan x="-3.087" y="0">
                      !
                    </tspan>
                  </text>
                </g>
              </svg>
              <S.Arrow />
            </S.EmergencyIconWrap>
          ) : (
            ""
          )}
          {arrival_time && arrival_time > end_time ? (
            <S.LateIocnWrap name="지각">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="13" r="7" />
                <polyline points="12 10 12 13 14 13" />
                <line x1="7" y1="4" x2="4.25" y2="6" />
                <line x1="17" y1="4" x2="19.75" y2="6" />
              </svg>
              <S.Arrow />
            </S.LateIocnWrap>
          ) : (
            ""
          )}
          <S.FullBar />
        </S.RightHeader>
      </S.Header>
      <S.Body>
        <p>{place}</p>
        <S.FlexBetween>
          <div>{dateInfo}</div>
          <S.FlexBetween>
            <S.Bar>-</S.Bar>
            <div>
              <div>{startTime}</div>
              <div>{endTime}</div>
            </div>
          </S.FlexBetween>
        </S.FlexBetween>
      </S.Body>
    </S.Container>
  );
};

export default memo(OutingCard);
