import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Recommend = () => {
  return (
    <>
      <S.GrayBox />
      <S.ContentWrap>
        <S.ButtonWrap>
          <Link to="/recommend/combine">
            <S.Button>음료 조합해보기</S.Button>
          </Link>
          <Link to="/recommend/AI">
            <S.Button>AI 추천 조합 받아보기</S.Button>
          </Link>
        </S.ButtonWrap>
      </S.ContentWrap>
      <S.GrayBox />
    </>
  );
};

export default Recommend;
