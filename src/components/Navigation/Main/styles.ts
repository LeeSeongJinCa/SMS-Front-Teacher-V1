import styled, { css } from "styled-components";

export const Container = styled.div<{
  isManagementMode: boolean;
}>`
  width: 15vw;
  box-sizing: border-box;
  padding: 40px 0 0 30px;
  background-color: var(--base-color);
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  min-width: 220px;
  min-height: 600px;

  .active {
    color: var(--base-color);
    > div + div {
      border-left-color: var(--base-color);
    }
  }

  ${props =>
    props.isManagementMode &&
    css`
      div {
        * {
          color: black !important;
        }
      }
      div {
        color: black;
      }
      .active {
        background-color: #f6f6f6 !important;
        color: black;

        > div + div {
          border-left-color: black;
        }
      }
    `}
`;

export const BackgroundImgWrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Circle = styled.img<{
  top: number;
  left: number;
  width: number;
  height: number;
}>`
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const ManagementMenu = styled.div`
  position: absolute;
  bottom: 130px;
  > div > div > div {
    font-weight: bold;
  }

  > div:nth-child(2) > div > div {
    color: #ff4e00;
  }
`;
