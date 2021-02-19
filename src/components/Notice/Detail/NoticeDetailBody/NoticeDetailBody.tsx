import React, { FC, useCallback, useEffect, useRef } from "react";
import * as S from "./styles";
import EditerJS from "@editorjs/editorjs";

interface EditerJSParserObj {
  type: "header" | "list" | "paragraph";
  data: {
    text?: string;
    items?: string[];
    level?: number;
  };
}

interface Props {
  content: string;
}

const NoticeDetailBody: FC<Props> = ({ content }) => {
  const render = useCallback(() => {
    if (!content) return "";
    const blocks: EditerJSParserObj[] = JSON.parse(content).blocks;
    return blocks.map(({ data, type }, i) => {
      switch (type) {
        case "header": {
          return (
            <div key={i} className="ce-block__content">
              {React.createElement(
                `h${data.level}`,
                { className: "ce-header" },
                data.text
              )}
            </div>
          );
        }
        case "list": {
          return (
            <div key={i} className="ce-block__content">
              {data.items.map((content: string, i: number) => (
                <div>
                  {i + 1}. {content}
                </div>
              ))}
            </div>
          );
        }
        case "paragraph": {
          return <div className="ce-block__content">{data.text}</div>;
        }
      }
    });
  }, []);

  return (
    <S.Container>
      <S.Hr />
      <S.Content id="editer">{render()}</S.Content>
    </S.Container>
  );
};

export default NoticeDetailBody;
