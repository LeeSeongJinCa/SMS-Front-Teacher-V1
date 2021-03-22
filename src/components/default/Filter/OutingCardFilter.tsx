import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState
} from "react";
import { toast } from "react-toastify";
import { OutingCardFilter } from "../../../lib/api/payloads/OutingCard";
import * as S from "./styles";

interface Props {
  onChange: (data: OutingCardFilter) => void;
}

const OutingCardFilter: FC<Props> = ({ onChange }) => {
  const [settingIsOpen, setSetiingIsOpen] = useState<boolean>(false);
  const [typeIsFloor, setTypeIsFloor] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<OutingCardFilter>({});
  const [filterOn, setFilterOn] = useState<boolean>(false);

  useEffect(() => {
    onChange(filterData);
  }, [filterData]);

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (!filterOn) {
        return;
      }
      const { name, value } = e.target;
      setFilterData(prev => {
        const newState = { ...prev, [name]: Number(value) };
        if (!newState.grade && newState.group) {
          toast.error("학년을 선택해야 합니다");
          return prev;
        }

        return newState;
      });
    },
    [filterOn]
  );

  const changeSetiingIsOpen = useCallback(() => {
    setSetiingIsOpen(prev => {
      if (!prev && !filterOn) return prev;
      return !prev;
    });
  }, [filterOn]);

  const changeTypeClickHandler = useCallback(() => {
    if (typeIsFloor) {
      setTypeIsFloor(false);
      setFilterData({ grade: 0, floor: 0 });
      return;
    }
    setTypeIsFloor(true);
    setFilterData({ floor: 0 });
  }, [typeIsFloor]);

  const filterToggle = useCallback(() => {
    if (filterOn) {
      setFilterOn(false);
      setSetiingIsOpen(false);
      onChange({ grade: 0, group: 0 });
      return;
    }
    setFilterOn(true);
    onChange(filterData);
  }, [filterOn, filterData]);

  const { floor, grade, group } = filterData;

  return (
    <>
      <S.Container>
        <S.FilterBasic>
          <S.FilterWrap onClick={changeSetiingIsOpen}>
            <S.Triangle />
            <div>필터링</div>
          </S.FilterWrap>
          {settingIsOpen && (
            <S.HiddenWrap>
              <div onClick={changeTypeClickHandler}>
                <S.SettingType active={typeIsFloor}>동아리</S.SettingType>
                <S.SettingType active={!typeIsFloor}>학번</S.SettingType>
              </div>
              {typeIsFloor ? (
                <>
                  <S.SelectWrap>
                    <span>동아리</span>
                    <select
                      name="floor"
                      value={floor || 0}
                      onChange={changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                      <option value="0">전체</option>
                    </select>
                  </S.SelectWrap>
                </>
              ) : (
                <>
                  <S.SelectWrap>
                    <span>학년</span>
                    <select
                      name="grade"
                      value={grade || 0}
                      onChange={changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="0">전체</option>
                    </select>
                  </S.SelectWrap>
                  <S.SelectWrap>
                    <span>반</span>
                    <select
                      name="group"
                      value={group || 0}
                      onChange={changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">4</option>
                      <option value="0">전체</option>
                    </select>
                  </S.SelectWrap>
                </>
              )}
            </S.HiddenWrap>
          )}
        </S.FilterBasic>
        <S.ResetBtn onClick={filterToggle}>
          <S.ToggleBtn isActive={filterOn}>ON</S.ToggleBtn>
          <S.ToggleBtn isActive={!filterOn}>OFF</S.ToggleBtn>
        </S.ResetBtn>
      </S.Container>
    </>
  );
};

export default OutingCardFilter;
