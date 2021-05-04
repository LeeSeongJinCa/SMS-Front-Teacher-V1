import { apiDefault } from "../client";
import { BoardEdit, BoardWriteData, BoardWriteFilter } from "../payloads/Board";

export const writeNotice = (
  type: "school",
  data: BoardWriteData,
  filter: BoardWriteFilter
) => {
  return apiDefault().post("/announcements", {
    ...data,
    ...filter,
    type
  });
};

export const editNotice = (type: "school" | "club", data: BoardEdit) => {
  const { title, uuid, content, target_grade, target_group } = data;
  return apiDefault().patch(`/announcements/uuid/${uuid}`, {
    title,
    content,
    target_grade,
    target_group,
    type
  });
};
