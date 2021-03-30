import styled from "styled-components";

export const StatisticsWrap = styled.main`
  padding: 40px;
  > aside {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    > div {
      display: flex;
    }
  }
  > section {
    max-height: 600px;
    overflow-y: scroll;
    > ul > li:first-of-type {
      padding: 8px;
      border-bottom: 1px solid #dddddd;
      > span {
        display: inline-block;
        width: 150px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
`;

export const SelectorWrap = styled.div`
  > div {
    display: flex;
    align-items: center;
    padding: 0 6px;
    &:first-child {
      border-right: 1px solid #242424;
    }
    > span {
      margin-right: 8px;
    }
    > ul {
      display: flex;
      > li {
        > label {
          display: flex;
          align-items: center;
          margin: 0 4px;
          cursor: pointer;
          > input {
            margin: 0;
            cursor: pointer;
          }
          > span {
            margin: 4px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const SearchWrap = styled.div`
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;
    background-color: #f6f6f6;
    > img {
      margin-right: 4px;
    }
    > input {
      width: 200px;
      margin: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
    }
  }
`;

export const PeriodWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
  > div {
    margin-right: 6px;
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 4px solid black;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  & + div {
    margin-left: 5px;
  }
`;

export const StudentItemWrap = styled.li`
  position: relative;
  padding: 24px 8px;
  &:nth-child(2n - 1) {
    background-color: #fbfbfb;
  }
  &:hover > img {
    display: block;
  }
  > span {
    display: inline-block;
    width: 150px;
    text-align: center;
    font-weight: 300;
  }
  > img {
    position: absolute;
    top: 30px;
    right: 12px;
    display: none;
    width: 20px;
    transform: rotate(90deg);
    transition: transform 300ms;
    cursor: pointer;
    &.spread {
      transform: rotate(180deg);
    }
  }
  > div {
    overflow: hidden;
  }
`;

interface SubList {
  isShown: boolean;
}

export const StudentSubList = styled.ul<SubList>`
  transition: all 600ms;
  height: 300px;
  overflow-y: scroll;
  ${({ isShown }) => (isShown ? "display: block;" : "display: none;")};
  > li {
    display: flex;
    padding: 8px 0;
    &:first-of-type > span {
      font-weight: 400;
    }
    > span {
      flex-grow: 1;
      text-align: center;
      font-size: 12px;
      font-weight: 300;
      &.place {
        width: 30%;
      }
      &.date {
        width: 20%;
      }
      &.situation {
        width: 15%;
      }
      &.reason {
        width: 20%;
      }
      &.late {
        width: 15%;
      }
    }
  }
`;
