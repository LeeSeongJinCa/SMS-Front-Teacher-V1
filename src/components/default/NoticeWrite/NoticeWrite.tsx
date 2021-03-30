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
import EditerJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { BoardType, BoardWriteFilter } from "../../../lib/api/payloads/Board";
import * as S from "./styles";
import { PageHeader } from "..";
import WriteCategory from "../Category/WriteCategory";
import { writeNotice } from "../../../modules/action/notice/detail";
import { isIncludeEmpty } from "../../../lib/utils";

export interface NoticeWriteSet {
  title: string;
  imgSrc: string;
  color: string;
  type: BoardType;
}
interface Props {
  setting: NoticeWriteSet;
}

const AdminNoticeWriting: FC<Props> = ({ setting }) => {
  const dispatch = useDispatch();
  const editerRef = useRef<EditerJS>();
  const [title, setTitle] = useState<string>("");
  const [filterData, setFilterData] = useState<BoardWriteFilter>({
    target_grade: 0,
    target_group: 0
  });

  useEffect(() => {
    const editer = new EditerJS({
      holder: "editer",
      tools: {
        header: Header,
        list: List
      }
    });
    editerRef.current = editer;
  }, []);

  const helpMosueMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
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
    if (!editerRef) return;
    if (!title) {
      toast.error("제목을 입력해주세요");
      return;
    }

    if (setting.type === "school" && isIncludeEmpty(filterData)) {
      toast.error("필터를 적용해주세요");
      return;
    }
    const writeData = await editerRef.current.save();
    if (!writeData.blocks.length) {
      toast.error("내용을 입력해주세요");
      return;
    }

    const writeDataStr: string = JSON.stringify(writeData);

    dispatch(
      writeNotice({
        content: writeDataStr,
        title,
        type: setting.type,
        ...filterData
      })
    );
  }, [title, filterData, setting.type]);

  return (
    <S.Container>
      <PageHeader imgSrc={setting.imgSrc} title={setting.title} type="DETAIL" />
      <S.Hr />
      <S.TitleInput
        onChange={changeHeaderText}
        value={title}
        type="text"
        placeholder="제목을 입력하세요"
      />
      <S.Hr />
      {setting.type === "school" && (
        <WriteCategory onChange={writeFilterHandler} />
      )}
      <S.EditerBackground>
        <S.Editer id="editer" onClick={helpMosueMove}></S.Editer>
      </S.EditerBackground>
      <S.Footer>
        <S.Button color="black" borderColor="#FBFBFB" backgroundColor="#FBFBFB">
          취소
        </S.Button>
        <S.Button
          color="white"
          borderColor={setting.color}
          backgroundColor={setting.color}
          onClick={saveHandler}
        >
          작성
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default AdminNoticeWriting;
