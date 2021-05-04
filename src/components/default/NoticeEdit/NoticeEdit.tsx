import React, {
  ChangeEvent,
  FC,
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import { PageHeader } from "../../default";
import * as S from "../../Admin/Notice/writing/styles";
import { editNotice } from "../../../modules/action/notice/detail";
import { BoardWriteFilter } from "../../../lib/api/payloads/Board";
import WriteCategory from "../Category/WriteCategory";
import { isIncludeEmpty } from "../../../lib/utils";

export interface NoticeEditSet {
  color: string;
  imgSrc: string;
  title: string;
  cancelHref: string;
  type: "school" | "club";
}

interface Props {
  editData: {
    title: string;
    content: string;
  };
  setting: NoticeEditSet;
}

const NoticeEdit: FC<Props> = ({ editData, setting }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id: string = useParams<{ id: string }>().id;
  const editorRef = useRef<EditorJS>();
  const [newTitle, setNewTitle] = useState<string>("");
  const [filterData, setFilterData] = useState<BoardWriteFilter>({});

  useEffect(() => {
    const { title, content } = editData;

    if (!content) return;

    setNewTitle(title);

    const editor = new EditorJS({
      holder: "editer",
      tools: {
        header: Header,
        list: List
      },
      data: JSON.parse(content)
    });
    editorRef.current = editor;
  }, [editData.title, editData.content]);

  const writeFilterHandler = useCallback((data: BoardWriteFilter) => {
    setFilterData(data);
  }, []);

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  }, []);

  const cancelEdit = useCallback(() => {
    history.push(`${setting.cancelHref}/${id}`);
  }, [id]);

  const saveHandler = useCallback(async () => {
    const { type } = setting;
    if (!newTitle) {
      toast.error("제목을 입력하세요");
      return;
    }

    if (isIncludeEmpty(filterData)) {
      toast.error("필터를 적용해 주세요");
      return;
    }

    const writeData = await editorRef.current.save();
    if (!writeData.blocks.length) {
      toast.error("내용을 입력하세요");
      return;
    }

    const writeDataStr = JSON.stringify(writeData);

    dispatch(
      editNotice({
        content: writeDataStr,
        title: newTitle,
        uuid: id,
        ...filterData,
        type: setting.type
      })
    );
  }, [newTitle, filterData, setting.type]);

  return (
    <S.Container>
      <PageHeader imgSrc={setting.imgSrc} title={setting.title} type="DETAIL" />
      <S.Hr />
      <S.TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        value={newTitle}
        onChange={changeTitle}
      />
      <S.Hr />
      {setting.type === "school" && (
        <WriteCategory onChange={writeFilterHandler} />
      )}
      <S.EditorBackground>
        <S.Editor id="editer"></S.Editor>
      </S.EditorBackground>
      <S.Footer>
        <S.Button
          color="white"
          borderColor="#DDDDDD"
          backgroundColor={setting.color}
          onClick={cancelEdit}
        >
          취소
        </S.Button>
        <S.Button
          color="white"
          borderColor="#DDDDDD"
          backgroundColor={setting.color}
          onClick={saveHandler}
        >
          작성
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default NoticeEdit;
