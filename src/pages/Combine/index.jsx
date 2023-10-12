import React, { useRef, useState } from "react";
import * as _ from "./style"
import { useNavigate } from "react-router-dom";
import { menuCalc } from "./menuCalc";
import { MenuContentData } from "../../Data/menuData";

const Combine = () => {
  const navigate = useNavigate();
  const [ColorNumber, setColorNumber] = useState(0);
  const SugarPercent = useRef(50);
  const [StyleNumber, setStyleNumber] = useState(0);
  const [step, setStep] = useState(0);
  const [FeelLevel, setFeelLevel] = useState(0);
  const [ResultData, setResultData] = useState({});

  const menuResult = () => {
    let flag = false;
    const title = menuCalc(ColorNumber, SugarPercent.current, StyleNumber);
    for(const Row of MenuContentData) {
      for(const Data of Row) {
        if(flag) break;
        if(Data.title === title) {
          setResultData(Data);
          flag = true;
        }
      }
      if(flag) break;
    }
  }

  const OrderChange = () => {
    const lastOrder = JSON.parse(localStorage.getItem('orderList')) || [];
    let changeFlag = false;
		const OrderList = [];

		for (const Data of lastOrder) {
			if (Data.title === ResultData.title) {
				Data.amount += 1;
        OrderList.push(Data)
				changeFlag = true;
			} else {
				OrderList.push(Data)
			}
		}

		if (!changeFlag) {
			OrderList.push({
        title: ResultData.title,
        amount: 1,
        money: ResultData.money,
        imageURL: ResultData.imageURL
      });
		}
    
    localStorage.setItem('orderList', JSON.stringify(OrderList));
    navigate('/main')
  }

  return (
    <>
      {
        step === 0 &&
        <_.Container>
          <_.Title>음료 조합</_.Title>
          <_.BackButton onClick={() => navigate('/main')}>그만두기</_.BackButton>
          <_.ContentBox>
            <_.ContentInBox>
              <_.SubTitle>음료 기본 색상</_.SubTitle>
              <_.ButtonListBox>
                <_.SelectedButton
                  check={ColorNumber === 0}
                  onClick={() => setColorNumber(0)}
                >
                  검정색
                </_.SelectedButton>
                <_.SelectedButton
                  check={ColorNumber === 1}
                  onClick={() => setColorNumber(1)}
                >
                  하얀색
                </_.SelectedButton>
                <_.SelectedButton
                  check={ColorNumber === 2}
                  onClick={() => setColorNumber(2)}
                >
                  초록색
                </_.SelectedButton>
                <_.SelectedButton
                  check={ColorNumber === 3}
                  onClick={() => setColorNumber(3)}
                >
                  노란색
                </_.SelectedButton>
              </_.ButtonListBox>
            </_.ContentInBox>
            <_.ContentInBox>
              <_.SubTitle>음료 당도</_.SubTitle>
              <div>
                <_.BetweenBox>
                  <_.Text>안 달게</_.Text>
                  <_.Text>달게</_.Text>
                </_.BetweenBox>
                <_.RangeBox>
                  <_.RangeInput onChange={(e) => {SugarPercent.current = +e.target.value}}/>
                </_.RangeBox>
              </div>
            </_.ContentInBox>
            <_.ContentInBox>
              <_.SubTitle>음료 스타일</_.SubTitle>
              <_.ButtonListBox>
                <_.SelectedButton
                  check={StyleNumber === 0}
                  onClick={() => setStyleNumber(0)}
                >
                  대중적임
                </_.SelectedButton>
                <_.SelectedButton
                  check={StyleNumber === 1}
                  onClick={() => setStyleNumber(1)}
                >
                  특별함
                </_.SelectedButton>
              </_.ButtonListBox>
            </_.ContentInBox>
          </_.ContentBox>
          <_.CenterBox>
            <_.CombineButton onClick={() => {
              menuResult();
              setStep(1);
            }}
            >
            조합하기
            </_.CombineButton>
          </_.CenterBox>
        </_.Container>
      }
      {
        step === 1 &&
        <_.WaitContainer>
          <_.TextContainer>
            선택한 답변에 가장 가까운
            <br />
            음료를 조합하고 있어요.
            <br />
            <br />
            이 절차는 몇 분 정도
            <br />
            소요될 수 있어요.
          </_.TextContainer>
          <_.CombineButton onClick={() => setStep(2)}>확인하기</_.CombineButton>
        </_.WaitContainer>
      }
      {
        step === 2 &&
        <_.ResultContainer>
          <_.ContentContainer>
            <_.Title>완성된 음료</_.Title>
            <_.SubContentContainer>
              <_.DrinkImg img={ResultData.imageURL} />
              <_.Title>{ResultData.title}</_.Title>
              <_.MoneyText>가격 : {ResultData.money.toLocaleString()}원</_.MoneyText>
            </_.SubContentContainer>
          </_.ContentContainer>
          <_.BottomContainer>
            <_.RecommendContainer>
              <_.RecommendText>결과가 만족스러우신가요?</_.RecommendText>
              <_.CircleTextBox>
                <_.CircleBox
                  color='#AAFFA8'
                  check={FeelLevel === 5}
                  onClick={() => setFeelLevel(5)}
                />
                <_.CircleText>만족</_.CircleText>
              </_.CircleTextBox>
              <_.CircleBox
                color='#D2FFD2'
                size={50}
                check={FeelLevel === 4}
                onClick={() => setFeelLevel(4)}
              />
              <_.CircleBox
                color='#BBBBBB'
                size={40}
                check={FeelLevel === 3}
                onClick={() => setFeelLevel(3)}
              />
              <_.CircleBox
                color='#FFDBDB'
                size={50}
                check={FeelLevel === 2}
                onClick={() => setFeelLevel(2)}
              />
              <_.CircleTextBox>
                <_.CircleBox
                  color='#FFB8B8'
                  check={FeelLevel === 1}
                  onClick={() => setFeelLevel(1)}
                />
                <_.CircleText>불 만족</_.CircleText>
              </_.CircleTextBox>
            </_.RecommendContainer>
            <_.SelectedContainer>
              <_.MoveButton onClick={() => navigate('/main')}>홈으로 돌아가기</_.MoveButton>
              <_.MoveButton onClick={() => OrderChange()}>장바구니에 담기</_.MoveButton>
            </_.SelectedContainer>
          </_.BottomContainer>
        </_.ResultContainer>
      }
    </>
  );
};

export default Combine;
