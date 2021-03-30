import React, { FC } from "react";
import * as S from "./styles";
import { Hr } from "../../Board/styles";
import { FacebookIcon } from "../../../../assets";
import { customSelector, getFacebookLink } from "../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const InfoHeader: FC = () => {
  const {
    name,
    club_concept,
    start_period,
    link
  } = useSelector((state: stateType) => ({
    ...state.clubDetail,
    ...state.recruitmentDetail
  }));
  return (
    <>
      <S.Container>
        <div>
          <S.Title>{name}</S.Title>
          <p>{club_concept}</p>
        </div>
        <S.FlexDiv>
          <S.DateWrap>
            <div>2020-07-25</div>
            <div>
              <span>~</span>
              <span>08-01</span>
            </div>
          </S.DateWrap>
          <S.FaceBookBtn href={getFacebookLink(link)}>
            <img src={FacebookIcon} />
            지원하기
          </S.FaceBookBtn>
        </S.FlexDiv>
      </S.Container>
      <Hr />
    </>
  );
};

export default InfoHeader;
