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
    overflow-y: auto;
    > ul > li:first-of-type {
      padding: 8px;
      border-bottom: 1px solid #dddddd;
      font-weight: bold;
      > span {
        display: inline-block;
        width: 150px;
        text-align: center;
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

export const PeriodWrap = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
  > span {
    margin-right: 4px;
    font-size: 14px;
  }
  > select {
    border: 1px solid #dddddd;
    cursor: pointer;
  }
`;

export const StudentItemWrap = styled.li`
  position: relative;
  padding: 24px 8px;
  cursor: pointer;
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
  }
  > img {
    position: absolute;
    top: 30px;
    left: 12px;
    display: none;
    width: 20px;
    transform: rotate(90deg);
    transition: transform 300ms;
    &.spread {
      transform: rotate(180deg);
    }
  }
  > div {
    width: 95%;
    overflow: hidden;
  }
`;

interface SubList {
  isShown: boolean;
}

export const StudentSubList = styled.ul<SubList>`
  transition: all 600ms;
  max-height: 300px;
  overflow-y: auto;
  ${({ isShown }) => (isShown ? "display: block;" : "display: none;")};
  > li {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px dashed #aaaaaa;
    &:first-of-type {
      font-size: 13px;
      margin-top: 8px;
      border-bottom: 1px solid #cccccc;
    }
    > span {
      flex-grow: 1;
      text-align: center;
      font-size: 12px;
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

export const NoDisplayList = styled.div`
  padding: 24px;
  text-align: center;
`;
