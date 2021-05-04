import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

import * as S from "./styles";
import BoardTableHeader from "./Table/header/BoardTableHeader";
import BoardTableBody from "./Table/body/BoardTableBody";

import PagiNation from "../PagiNation/PagiNation";
import { BoardListItem } from "../../../lib/api/payloads/Board";

export interface BoardObj {
  id: number;
  title: string;
  date: string;
  circleName?: string;
  viewCount: number;
}

interface Props {
  names: string[];
  maxSize: number;
  data: BoardListItem[];
}

const Board: FC<Props> = ({ data, names, maxSize }) => {
  const location = useLocation();
  const page = Number(qs.parse(location.search).page) || 0;
  return (
    <S.Container>
      <BoardTableHeader names={names} />
      <BoardTableBody data={data} />
      <PagiNation page={page} maxSize={maxSize} />
    </S.Container>
  );
};

export default Board;
