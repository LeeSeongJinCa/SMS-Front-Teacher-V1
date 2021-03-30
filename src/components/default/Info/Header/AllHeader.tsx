import React, { FC } from "react";
import * as S from "./styles";
import { Hr } from "../../Board/styles";
import { customSelector, getFacebookLink } from "../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { FacebookIcon } from "../../../../assets";

const AllHeader: FC = () => {
  const { name, link, club_concept } = useSelector(
    (state: stateType) => state.clubDetail
  );
  return (
    <>
      <S.Container>
        <div>
          <S.Title>{name}</S.Title>
          <p>{club_concept}</p>
        </div>
        <S.FlexDiv>
          <S.FaceBookBtn href={getFacebookLink(link)}>
            <img src={FacebookIcon} />
            페이스북 그룹
          </S.FaceBookBtn>
        </S.FlexDiv>
      </S.Container>
      <Hr />
    </>
  );
};

export default AllHeader;
