import React, { FC, memo, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

interface Props {
  page: number;
  maxSize: number;
}

const PageNation: FC<Props> = ({ maxSize, page }) => {
  const startPage = Math.floor(page / 5);
  const history = useHistory();

  const maxPage = Math.ceil(maxSize / 10);
  const { pathname } = history.location;
  const baseUrl = `${pathname}?page=`;

  useEffect(() => {
    if (page <= 0 || page >= maxPage) {
      history.push(pathname);
    }
  }, [page]);
  return (
    <S.Container>
      <div>
        <S.PageButton to={baseUrl + (startPage * 5 - 5)}>
          <S.MovePage rotate={270} />
        </S.PageButton>
      </div>
      <div>
        {new Array(5).fill(0).map((_, i) => {
          let pageN = startPage * 5 + (i + 1);
          if (pageN > maxPage) return "";
          return (
            <S.PageButton
              key={pageN}
              to={baseUrl + (pageN - 1)}
              className={page + 1 === pageN ? "active" : ""}
            >
              {pageN}
            </S.PageButton>
          );
        })}
      </div>
      <div>
        <S.PageButton to={baseUrl + (startPage + 1) * 5}>
          <S.MovePage rotate={90} />
        </S.PageButton>
      </div>
    </S.Container>
  );
};

export default memo(PageNation);
