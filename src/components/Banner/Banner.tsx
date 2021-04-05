import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

interface Props {}

const Banner: FC<Props> = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const [show, setShow] = useState<boolean>(true);
  const [check, setCheck] = useState<boolean>(false);

  const toggleCheck = () => {
    setCheck(prev => !prev);
  };

  const doNotSeeForADay = () => {
    const d = new Date();
    const until = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    localStorage.setItem("banner", `${+until}`);
  };

  const close = () => {
    if (check) doNotSeeForADay();
    bannerRef.current.classList.add("close");
  };

  useEffect(() => {
    const d = +new Date();
    const until = +localStorage.getItem("banner");
    if (d < until) {
      setShow(false);
    }
  }, []);

  return (
    <>
      {show && (
        <S.BannerWrap ref={bannerRef}>
          <p>
            전화번호가 입력어있지 않습니다. <Link to="/user">전화번호</Link>를
            입력해 학생 외출에 관한 알림 문자를 받으세요.
          </p>
          <label htmlFor="check">
            <input type="checkbox" id="check" onChange={toggleCheck} />
            <span>하루 동안 보지 않기</span>
          </label>
          <span onClick={close}>닫기</span>
        </S.BannerWrap>
      )}
    </>
  );
};

export default Banner;
