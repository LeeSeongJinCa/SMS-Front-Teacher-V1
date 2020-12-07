import React, {
  DragEvent,
  FC,
  MouseEvent,
  ReactElement,
  useCallback,
  useRef,
  useState,
  ChangeEvent,
  memo
} from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { ModalClose, paperclipClubPicture } from "../../../assets";
import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubPicture: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { pictureId } = useSelector((state: stateType) => state.ManagementInfo);
  const fileRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const [dragged, setDragged] = useState<boolean>(false);
  const [showCancel, setShowCancel] = useState<boolean>(false);

  const isEnableExt = (fileName: string) => {
    const enableExts = "jpg,jpeg,png,gif,svg";
    const fileExt = fileName.slice(fileName.lastIndexOf(".") + 1);
    return enableExts.split(",").some(ext => ext === fileExt);
  };

  const uploadFile = useCallback((files: FileList) => {
    if (files.length !== 1) return;
    if (!isEnableExt(files.item(0).name.toLowerCase())) {
      alert("파일 확장자는 'jpg, jpeg, png, gif, svg' 중 하나여야 합니다.");
      return;
    }

    setShowCancel(true);
    readFile(files.item(0));
  }, []);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const data = e.dataTransfer.files;

    fileRef.current.files = data;
    uploadFile(data);
    setDragged(false);
  };

  const readFile = (file: File) => {
    previewRef.current.src = URL.createObjectURL(file);
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();

    setDragged(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();

    setDragged(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleCancelPreview = (e: MouseEvent) => {
    e.preventDefault();

    setShowCancel(false);
    fileRef.current.value = "";
    previewRef.current.src = "";
  };

  const handleChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handlePictureId(1);
  };

  return (
    <S.ClubPicture>
      <div>
        <p>동아리 사진</p>
        <S.ClubPictureInner>
          <S.ClubPictureInnerText>
            💡 로고나 홍보 사진 등 동아리 관련 사진을 넣어주세요.
          </S.ClubPictureInnerText>
        </S.ClubPictureInner>
      </div>
      <input
        type="file"
        id="files"
        name="files"
        onChange={e => uploadFile(e.currentTarget.files)}
        hidden={true}
        ref={fileRef}
      />
      <S.ClubPictureThumbnail
        htmlFor="files"
        className={dragged && "dragged"}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <S.ClubPicturePreview ref={previewRef} />
        <S.ClubPictureWrap>
          <img
            src={paperclipClubPicture}
            alt="club picture"
            title="club picture"
          />
          <span>첨부파일</span>
        </S.ClubPictureWrap>
        {showCancel && (
          <img
            src={ModalClose}
            alt="close"
            title="close"
            onClick={handleCancelPreview}
          />
        )}
      </S.ClubPictureThumbnail>
    </S.ClubPicture>
  );
};

export default memo(ClubPicture);