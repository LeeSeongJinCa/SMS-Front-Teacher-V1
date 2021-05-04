import React, {
  FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  MouseEvent
} from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import * as S from "./styles";

import { PageHeader } from "../";
import WriteCategory from "../Category/WriteCategory";
import { writeNotice } from "../../../modules/action/notice/detail";
import { isIncludeEmpty } from "../../../lib/utils";
import { BoardWriteFilter } from "../../../lib/api/payloads/Board";
import { NavIconNoticeMint } from "../../../assets";

interface Props {}

const AdminNoticeWriting: FC<Props> = () => {
  const dispatch = useDispatch();
  const editorRef = useRef<EditorJS>();
  const [title, setTitle] = useState<string>("");
  const [filterData, setFilterData] = useState<BoardWriteFilter>({
    target_grade: 0,
    target_group: 0
  });

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editer",
      tools: {
        header: Header,
        list: List
      }
    });
    editorRef.current = editor;
  }, []);

  const helpMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    const contentLines = document.querySelectorAll(
      ".codex-editor__redactor > .ce-block > div > div"
    );
    const length: number = contentLines.length;

    length && (contentLines[length - 1] as HTMLElement).focus();
  }, []);

  const changeHeaderText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const writeFilterHandler = useCallback((data: BoardWriteFilter) => {
    setFilterData(data);
  }, []);

  const saveHandler = useCallback(async () => {
    if (!editorRef) return;
    if (!title) {
      toast.error("제목을 입력해주세요");
      return;
    }

    if (isIncludeEmpty(filterData)) {
      toast.error("필터를 적용해주세요");
      return;
    }
    const writeData = await editorRef.current.save();
    if (!writeData.blocks.length) {
      toast.error("내용을 입력해주세요");
      return;
    }

    const writeDataStr: string = JSON.stringify(writeData);

    dispatch(
      writeNotice({
        content: writeDataStr,
        title,
        type: "school",
        ...filterData
      })
    );
  }, [title, filterData]);

  return (
    <S.Container>
      <PageHeader
        imgSrc={NavIconNoticeMint}
        title="학교 공지사항 작성"
        type="DETAIL"
      />
      <S.Hr />
      <S.TitleInput
        onChange={changeHeaderText}
        value={title}
        type="text"
        placeholder="제목을 입력하세요"
      />
      <S.Hr />
      <WriteCategory onChange={writeFilterHandler} />
      <S.EditorBackground>
        <S.Editor id="editer" onClick={helpMouseMove}></S.Editor>
      </S.EditorBackground>
      <S.Footer>
        <S.Button color="black" borderColor="#FBFBFB" backgroundColor="#FBFBFB">
          취소
        </S.Button>
        <S.Button
          color="white"
          borderColor={"#23B2AD"}
          backgroundColor={"#23B2AD"}
          onClick={saveHandler}
        >
          작성
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default AdminNoticeWriting;
