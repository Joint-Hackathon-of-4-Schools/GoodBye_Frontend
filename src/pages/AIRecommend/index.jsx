import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const AIRecommned = () => {
  const [step, setStep] = useState("first");
  const [result, setResult] = useState("");
  const [gender, setGender] = useState("");

  return (
    <S.Wrapper>
      {step !== "qa6" && result !== "hi" && (
        <Link to="/">
          <S.BackButton>그만두기</S.BackButton>
        </Link>
      )}

      {step === "first" && (
        <>
          <S.FirstTitle>
            AI의 추천에 앞서,
            <br /> 먼저 몇가지 질문에 답해주세요.
          </S.FirstTitle>
          <S.FirstButton onClick={() => setStep("qa1")}>시작하기</S.FirstButton>
        </>
      )}
      {step === "qa1" && (
        <>
          <S.QaTitle>Q1.</S.QaTitle>
          <S.QaSubTitle>
            게임을 할 때, 주로 사용하는 캐릭터의 성별은 무엇인가요?
          </S.QaSubTitle>
          <S.TwoWrap>
            <S.TwoButton
              onClick={() => {
                setGender("man");
                setStep("qa2");
              }}
            >
              남자
            </S.TwoButton>
            <S.TtwoButton
              onClick={() => {
                setGender("woman");
                setStep("qa2");
              }}
            >
              여자
            </S.TtwoButton>
          </S.TwoWrap>
        </>
      )}
      {step === "qa2" && (
        <>
          <S.QaTitle>Q2.</S.QaTitle>
          <S.QaSubTitle>
            카페인이 삶에 꼭 필요한 물질이라고 생각하나요?
          </S.QaSubTitle>
          <S.TwoWrap>
            <S.TtwoButton
              onClick={() => {
                setStep("qa3");
              }}
            >
              네
            </S.TtwoButton>
            <S.TwoButton
              onClick={() => {
                setStep("qa3");
              }}
            >
              아니요
            </S.TwoButton>
          </S.TwoWrap>
        </>
      )}
      {step === "qa3" && (
        <>
          <S.QaTitle>Q3.</S.QaTitle>
          <S.QaSubTitle>
            카페인이 삶에 꼭 필요한 물질이라고 생각하나요?
          </S.QaSubTitle>
          <S.TwoWrap>
            <S.TwoButton
              onClick={() => {
                setStep("qa4");
              }}
            >
              항상 먹던 아메리카노
            </S.TwoButton>
            <S.TtwoButton
              onClick={() => {
                setStep("qa4");
              }}
            >
              새로 나온 자바칩푸라푸치노
            </S.TtwoButton>
          </S.TwoWrap>
        </>
      )}
      {step === "qa4" && (
        <>
          <S.QaTitle>Q4.</S.QaTitle>
          <S.QaSubTitle>
            신작 게임을 체험할 기회가 있다면 어떤 게임을 하실건가요?
          </S.QaSubTitle>

          <S.FourWrap>
            <div>
              <S.TtwoButton
                onClick={() => {
                  setStep("qa5");
                }}
              >
                달달한 로맨스 게임
              </S.TtwoButton>
              <S.TwoButton
                onClick={() => {
                  setStep("qa5");
                }}
              >
                손맛이 느껴지는 RPG 게임
              </S.TwoButton>
            </div>
            <div>
              <S.TwoButton
                onClick={() => {
                  setStep("qa5");
                }}
              >
                상쾌한 어드벤처 게임
              </S.TwoButton>
              <S.TtwoButton
                onClick={() => {
                  setStep("qa5");
                }}
              >
                인생의 쓴맛을 알게해주는 플랫포머 게임
              </S.TtwoButton>
            </div>
          </S.FourWrap>
        </>
      )}
      {step === "qa5" && (
        <>
          <S.QaTitle>Q5.</S.QaTitle>
          <S.QaSubTitle>
            본인의 연령대에 해당하는 나이를 선택해주세요.
          </S.QaSubTitle>

          <S.FourWrap>
            <div>
              <S.TtwoButton
                onClick={() => {
                  setStep("qa6");
                }}
              >
                0~19세
              </S.TtwoButton>
              <S.TwoButton
                onClick={() => {
                  setStep("qa6");
                }}
              >
                30~39세
              </S.TwoButton>
            </div>
            <div>
              <S.TwoButton
                onClick={() => {
                  setStep("qa6");
                }}
              >
                20~29세
              </S.TwoButton>
              <S.TtwoButton
                onClick={() => {
                  setStep("qa6");
                }}
              >
                40세~99세
              </S.TtwoButton>
            </div>
          </S.FourWrap>
        </>
      )}
      {step === "qa6" && (
        <>
          <S.P>
            AI가 당신의 취향에 맞는
            <br /> 메뉴 조합을 추천하고 있어요.
            <br />이 절차는 몇 분 정도 소요될 수 있어요.
          </S.P>
          <S.OkButton
            onClick={() => {
              setResult("hi");
              setStep("");
            }}
          >
            확인하기
          </S.OkButton>
        </>
      )}
      {result === "hi" && (
        <>
          <S.Title>AI 추천 조합</S.Title>
          <S.CardWrapper>
            <S.CardWrap>
              <S.MenuImg />
              <S.TitleWrap>
                <S.MenuName>하이</S.MenuName>
                <S.SmallName>수량: n개</S.SmallName>
                <S.MenuPrice>7,000원</S.MenuPrice>
              </S.TitleWrap>
            </S.CardWrap>
          </S.CardWrapper>
          <S.Price>총 ??,000원</S.Price>
          <S.ButtonWrap>
            <S.ButtonWtap>
              <Link to="/">
                <S.Button>홈으로 돌아가기</S.Button>
              </Link>
              <Link to="/main">
                <S.Button>장바구니에 담기</S.Button>
              </Link>
            </S.ButtonWtap>
          </S.ButtonWrap>
        </>
      )}
    </S.Wrapper>
  );
};

export default AIRecommned;
