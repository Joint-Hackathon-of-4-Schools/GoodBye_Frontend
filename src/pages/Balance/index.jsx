import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

const Balance = () => {
  const [data, setData] = useState();
  const getBalance = async () => {
    const { data } = await axios({
      url: `http://192.168.7.146:8080/api/chatGpt/match`,
      method: "get",
    });
    setData(data);
    console.log(data);
  };
  const [answerId, setAnswerId] = useState();
  const answer = data && data?.answerIndex;
  const itemInfor = data && [
    {
      title: data?.menus[answer].name,
      amount: 1,
      money: data?.menus[answer].price,
      imageURL: data?.menus[answer].imgUrl,
    },
  ];
  const [step, setStep] = useState("qa1");
  const [isAnswer, setIsAnswet] = useState(true);
  return (
    <>
      {step !== "qa3" && step !== "" && (
        <Link to="/">
          <S.BackButton>그만두기</S.BackButton>
        </Link>
      )}

      {step === "qa1" && (
        <>
          <S.TitleWrap>
            <S.Title>
              4개의 메뉴 중에 마음에 드는
              <br /> 음료를 선택해주세요.
            </S.Title>
            <S.Title>
              AI와 같은 메뉴를 선택하면,
              <br /> 10% 할인을 받을 수 있어요.
            </S.Title>
          </S.TitleWrap>
          <S.Button
            onClick={() => {
              setStep("qa2");
              getBalance();
            }}
          >
            시작하기
          </S.Button>
        </>
      )}
      {step === "qa2" && (
        <>
          <S.TitleWrap>
            <S.Title>
              AI가 추천 메뉴를 선정하고
              <br />
              답변을 정하고 있어요.
            </S.Title>
            <S.Title>
              이 절차는 몇 분 정도
              <br />
              소요될 수 있어요.
            </S.Title>
          </S.TitleWrap>
          <S.Button onClick={() => setStep("qa3")}>시작하기</S.Button>
        </>
      )}

      {step === "qa3" && (
        <>
          <S.BalanceGameTitle>BALANCE GAME</S.BalanceGameTitle>
          <S.SubTitle>지금 가장 먹고싶은 메뉴를 선택해주세요.</S.SubTitle>
          <S.ButtonWrap>
            <S.Button1
              onClick={() => {
                setAnswerId(0);
                setStep("");
              }}
            >
              {data?.menus[0].name}
            </S.Button1>
            <S.Button2
              onClick={() => {
                setAnswerId(1);
                setStep("");
              }}
            >
              {data?.menus[1].name}
            </S.Button2>
            <S.Button2
              onClick={() => {
                setAnswerId(2);
                setStep("");
              }}
            >
              {data?.menus[2].name}
            </S.Button2>
            <S.Button1
              onClick={() => {
                setAnswerId(3);
                setStep("");
              }}
            >
              {data?.menus[3].name}
            </S.Button1>
          </S.ButtonWrap>
        </>
      )}
      {step === "" ? (
        <S.Wrraper>
          {data?.answerIndex === answerId ? (
            <>
              <S.AnswerTitle>성공하였습니다!</S.AnswerTitle>
              <S.AnswerImg>
                <img src={data?.menus[answer].imgUrl} alt="dd"></img>
              </S.AnswerImg>
              <S.AnswerName>{data?.menus[answer].name}</S.AnswerName>
              <S.AnswerPrice>
                가격 : {data?.menus[answer].price}원
              </S.AnswerPrice>
              <S.AnswerNowPrice>
                {data?.menus[answer].price - data?.menus[answer].price * 0.1}원
              </S.AnswerNowPrice>
              <S.Box>
                <S.ButtonWraap>
                  <Link to="/">
                    <S.Buutton>홈으로 돌아가기</S.Buutton>
                  </Link>
                  <Link to="/main">
                    <S.Buutton
                      onClick={() =>
                        localStorage.setItem(
                          "orderList",
                          JSON.stringify(itemInfor)
                        )
                      }
                    >
                      장바구니에 담기
                    </S.Buutton>
                  </Link>
                </S.ButtonWraap>
              </S.Box>
            </>
          ) : (
            <>
              <S.FailTitle>
                실패하였습니다... (정답은: {data?.answerIndex + 1}번){" "}
              </S.FailTitle>
              <S.FailSubTitle>
                하지만 지금 AI 추천 메뉴를 구입하시면
                <br /> 5% 추가 할인 혜택을 받을 수 있어요.
              </S.FailSubTitle>
              <S.AnswerImg>
                <img src={data?.menus[answer].imgUrl} alt="dd"></img>
              </S.AnswerImg>
              <S.AnswerName>{data?.menus[answer].name}</S.AnswerName>
              <S.AnswerPrice>
                가격 : {data?.menus[answer].price}원
              </S.AnswerPrice>
              <S.AnswerNowPrice>
                {data?.menus[answer].price - data?.menus[answer].price * 0.05}원
              </S.AnswerNowPrice>
              <S.Box>
                <S.ButtonWraap>
                  <Link to="/">
                    <S.Buutton>홈으로 돌아가기</S.Buutton>
                  </Link>
                  <Link to="/main">
                    <S.Buutton
                      onClick={() =>
                        localStorage.setItem(
                          "orderList",
                          JSON.stringify(itemInfor)
                        )
                      }
                    >
                      장바구니에 담기
                    </S.Buutton>
                  </Link>
                </S.ButtonWraap>
              </S.Box>
            </>
          )}
        </S.Wrraper>
      ) : (
        ""
      )}
    </>
  );
};

export default Balance;
