import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

const AIRecommned = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState("first");
  const [result, setResult] = useState("");
  const [gender, setGender] = useState("");
  const [caffeine, setCaffeine] = useState("");
  const [three, setThree] = useState("");
  const [game, setGame] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState();
  const [requestSuccess, setrequestSuccess] = useState(false)
  const totalAmount = data?.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const sendData = {
    gender: gender,
    caffeine: caffeine,
    newTry: three,
    gameGenre: game,
    age: age,
  };

  const getGpt = async () => {
    const { data } = await axios({
      url: "http://192.168.7.146:8080/api/chatGpt/recommend",
      method: "post",
      data: sendData,
    });
    console.log(data);
    setData(data);
    setrequestSuccess(true);
  };

  const OrderChange = () => {
    const lastOrder = JSON.parse(localStorage.getItem('orderList')) || [];
    let changeFlag = [false, false, false];
		const OrderList = [];

		for (const Data of lastOrder) {
      for(const Index in data) {
        if (Data.title === data[Index].name) {
          Data.amount += 1;
          changeFlag[Index] = true;
          break;
        }
      }
      OrderList.push(Data)
		}

    for(const Index in data) {
      if (!changeFlag[Index]) {
        OrderList.push({
          title: data[Index].name,
          amount: 1,
          money: data[Index].price,
          imageURL: data[Index].imageURL
        });
      }
    }
    
    localStorage.setItem('orderList', JSON.stringify(OrderList));
    navigate('/main')
  }

  const itemInfor = data && [
    {
      title: data?.name,
      amount: 1,
      money: data?.price,
      imageURL: data?.imgUrl,
    },
  ];

  useEffect(() => {
    if(step === "qa6") {
      getGpt();
    }
  }, [step])

  return (
    <S.Wrapper>
      {step !== "qa6" && result !== "hi" && (
        <Link to="/main">
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
                setCaffeine("Yes");
              }}
            >
              네
            </S.TtwoButton>
            <S.TwoButton
              onClick={() => {
                setCaffeine("No");
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
            자주 가던 카페에
            <br /> 새로 나온 음료가 있다면
            <br /> 어떤 것을 시킬건가요?
          </S.QaSubTitle>
          <S.TwoWrap>
            <S.TwoButton
              onClick={() => {
                setThree("Yes");
                setStep("qa4");
              }}
            >
              항상 먹던 아메리카노
            </S.TwoButton>
            <S.TtwoButton
              onClick={() => {
                setThree("No");

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
                  setGame("Romantic");
                }}
              >
                달달한 로맨스 게임
              </S.TtwoButton>
              <S.TwoButton
                onClick={() => {
                  setStep("qa5");
                  setGame("Rpg");
                }}
              >
                손맛이 느껴지는 RPG 게임
              </S.TwoButton>
            </div>
            <div>
              <S.TwoButton
                onClick={() => {
                  setStep("qa5");
                  setGame("Adventure");
                }}
              >
                상쾌한 어드벤처 게임
              </S.TwoButton>
              <S.TtwoButton
                onClick={() => {
                  setStep("qa5");
                  setGame("Jar");
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
                  setAge("10");
                }}
              >
                0~19세
              </S.TtwoButton>
              <S.TwoButton
                onClick={() => {
                  setStep("qa6");
                  setAge("20");
                }}
              >
                30~39세
              </S.TwoButton>
            </div>
            <div>
              <S.TwoButton
                onClick={() => {
                  setStep("qa6");
                  setAge("30");
                }}
              >
                20~29세
              </S.TwoButton>
              <S.TtwoButton
                onClick={() => {
                  setStep("qa6");
                  setAge("40");
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
            <br /> 메뉴를 추천하고 있어요.
            <br />이 절차는 몇 분 정도 소요될 수 있어요.
          </S.P>
          <S.OkButton
            disabled={!requestSuccess}
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
          <S.Title>AI 추천 메뉴</S.Title>
          <S.CardWrapper>
            {/* <S.CardWrap>
              <S.MenuImg>
                <img src={data?.imgUrl} alt="cc"></img>
              </S.MenuImg>
              <S.TitleWrap>
                <S.MenuName>{data?.name}</S.MenuName>
                <S.MenuPrice>{data?.price}원</S.MenuPrice>
              </S.TitleWrap>
            </S.CardWrap> */}
            {data?.map((i) => {
              return (
                <S.CardWrap>
                  <S.MenuImg>
                    <S.Img src={i.imgUrl}></S.Img>
                  </S.MenuImg>
                  <S.TitleWrap>
                    <S.MenuName>{i.name}</S.MenuName>
                    <S.MenuPrice>{i.price.toLocaleString()}원</S.MenuPrice>
                  </S.TitleWrap>
                </S.CardWrap>
              );
            })}
          </S.CardWrapper>
          <S.Price>총 {totalAmount.toLocaleString()}원</S.Price>
          <S.ButtonWrap>
            <S.ButtonWtap>
              <Link to="/main">
                <S.Button>홈으로 돌아가기</S.Button>
              </Link>
              <S.Button onClick={() => OrderChange()}>장바구니에 담기</S.Button>
            </S.ButtonWtap>
          </S.ButtonWrap>
        </>
      )}
    </S.Wrapper>
  );
};

export default AIRecommned;
