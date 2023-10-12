import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const AIRecommned = () => {
  const [step, setStep] = useState("first");
  return (
    <S.Wrapper>
      <Link to="/">
        <S.BackButton>그만두기</S.BackButton>
      </Link>
      {step === "first" && (
        <S.FirstTitle>
          AI의 추천에 앞서,
          <br /> 먼저 몇가지 질문에 답해주세요.
        </S.FirstTitle>
      )}
    </S.Wrapper>
  );
};

export default AIRecommned;
