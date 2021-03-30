import React, { FC, useState, useCallback, ChangeEvent, memo } from "react";
import { Board, ListPageHeader } from "../../default";
import * as S from "./styles";
import { makeFilterFunc } from "../../../lib/utils";
import { BoardListItem } from "../../../lib/api/payloads/Board";
import { Spinner } from "../../../assets";

export interface NoticeListSet {
  title: string;
  imgSrc: string;
  size: number;
  names: string[];
  newButton?: boolean;
}

interface Props {
  notices: BoardListItem[];
  setting: NoticeListSet;
  loading: boolean;
}

const NoticeList: FC<Props> = ({ notices, setting, loading }) => {
  const [keyword, setKeyword] = useState("");
  const noticeFilterFunc = makeFilterFunc<BoardListItem>(
    notices,
    ({ title, writer_name }, keyword) =>
      title.includes(keyword) || writer_name.includes(keyword)
  );
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <ListPageHeader
        newButton={setting.newButton}
        onChange={onChange}
        title={setting.title}
        imgSrc={setting.imgSrc}
      />
      {loading ? (
        <S.LoadingWrap>
          <img src={Spinner} />
        </S.LoadingWrap>
      ) : (
        <Board
          maxSize={setting.size}
          names={setting.names}
          data={noticeFilterFunc(keyword)}
        />
      )}
    </S.Container>
  );
};

export default NoticeList;
