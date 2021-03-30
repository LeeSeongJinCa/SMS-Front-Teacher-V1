import React, { ChangeEvent, FC, MouseEvent, useMemo } from "react";
import { memo } from "react";
import { deleteBtn } from "../../../../../assets";
import { WantedObj } from "../../../../../modules/type/poster";
import * as S from "../styles";

export interface WantedManagement extends WantedObj {
  id: number;
  menuIsOpen: boolean;
}
interface Props extends WantedManagement {
  changeMenuIsOpen: (id: number) => void;
  changeGrade: (id: number, grade: number) => void;
  changeNumber: (id: number, grade: number) => void;
  changeField: (id: number, field: string) => void;
  deleteData: (id: number) => void;
}

const CircleWantedInputItem: FC<Props> = ({
  id,
  field,
  number,
  menuIsOpen,
  grade,
  changeField,
  changeGrade,
  changeMenuIsOpen,
  changeNumber,
  deleteData
}) => {
  return (
    <S.ItemContainer>
      <S.SelectWrap
        onClick={() => {
          changeMenuIsOpen(id);
        }}
      >
        <div>
          <span>{grade || 1}</span>
          <S.Triangle />
        </div>
        {menuIsOpen && (
          <S.SelectMenu>
            <div onClick={() => changeGrade(id, 1)}>1</div>
            <div onClick={() => changeGrade(id, 2)}>2</div>
            <div onClick={() => changeGrade(id, 3)}>3</div>
          </S.SelectMenu>
        )}
      </S.SelectWrap>
      <div>
        <input
          onChange={e => changeField(id, e.target.value)}
          name="field"
          type="text"
          value={field}
        />
      </div>
      <div>
        <input
          onChange={e => changeNumber(id, Number(e.target.value))}
          name="number"
          type="number"
          value={number}
        />
      </div>
      <S.DeleteBtnWrap>
        <button onClick={() => deleteData(id)}>
          <img src={deleteBtn} />
        </button>
      </S.DeleteBtnWrap>
    </S.ItemContainer>
  );
};

export default memo(CircleWantedInputItem);
