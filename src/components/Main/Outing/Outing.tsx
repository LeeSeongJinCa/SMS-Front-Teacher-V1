import React, { FC, ReactElement } from "react";

import * as S from "../style";

import { MainBike, MainHistory, MainWarning } from "../../../assets";

interface Props {}

const Outing: FC<Props> = (): ReactElement => {
  return (
    <S.Outing>
      <S.OutingTitleWrap>
        <S.OutingTitle>외출신청</S.OutingTitle>
        <S.OutingWarning to="/outing/warning">
          <img src={MainWarning} alt="warning" title="warning" />
          <S.OutingItemDesc>유의사항</S.OutingItemDesc>
        </S.OutingWarning>
      </S.OutingTitleWrap>
      <div>
        <S.OutingItem to="/outing/apply">
          <img src={MainBike} alt="apply" title="apply" />
          <S.OutingItemDesc>외출신청</S.OutingItemDesc>
        </S.OutingItem>
        <S.OutingItem to="/outing/history">
          <img src={MainHistory} alt="history" title="history" />
          <S.OutingItemDesc>내 외출신청 내역</S.OutingItemDesc>
        </S.OutingItem>
      </div>
    </S.Outing>
  );
};

export default Outing;
