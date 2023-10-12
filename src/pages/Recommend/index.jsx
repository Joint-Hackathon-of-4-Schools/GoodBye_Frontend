import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import 챗지피티 from "../../asset/Group 16.png";
import 챗지피티로고 from "../../asset/powered by.png";

const Recommend = () => {
  return (
    <>
      <Header />
      <S.ContentWrap>
        <S.ButtonWrap>
          <Link to="/recommend/combine">
            <S.Button>음료 조합해보기</S.Button>
          </Link>
          <Link to="/recommend/AI">
            <S.Button>AI 추천 조합 받아보기</S.Button>
          </Link>
          <Link to="/recommend/Balance">
            <S.Button>AI와 밸런스게임하기</S.Button>
          </Link>
        </S.ButtonWrap>
      </S.ContentWrap>
      <S.GrayBox>
        <S.ContentWrapper>
          <img src={챗지피티로고} alt="ddd" className="img1"></img>
          <img src={챗지피티} alt="ddd" className="img2"></img>
        </S.ContentWrapper>
      </S.GrayBox>
    </>
  );
};

export default Recommend;
