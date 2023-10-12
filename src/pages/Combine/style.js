import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 70px 230px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 120px;
`

export const Title = styled.span`
  height: 120px;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BackButton = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 20px;
  background: #F5F5F5;
  position: absolute;
  top: 60px;
  right: 80px;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`

export const ContentInBox = styled(ContentBox)`
  gap: 40px;
`

export const SubTitle = styled.span`
  height: 120px;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  align-items: center;
`

export const ButtonListBox = styled.div`
  display: flex;
  gap: 40px;
`

export const SelectedButton = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 20px;
  background: ${({check}) => check ? '#FFC500' : '#FFECAA'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  cursor: pointer;
`

export const BetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.span`
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`

export const RangeBox = styled.div`
  display: flex;
  justify-content: center;
`

export const RangeInput = styled.input.attrs({
  type: 'range',
  min: 0,
  max: 100,
  step: 1
})`
  appearance: none;
  width: 820px;
  height: 60px;
  border-radius: 20px;
  border: 4px solid #000;
  background: linear-gradient(90deg, #FFF 0%, #FFC500 100%);
  box-sizing: border-box;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    appearance: none;
    height: 80px;
    width: 20px;
    cursor: pointer;
    border-radius: 20px;
    background: #AAA;
  }
`

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
`

export const CombineButton = styled(SelectedButton)`
  width: 400px;
  background: #FFC500;
  font-size: 40px;
`

export const WaitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 84px;
  width: 100%;
  height: 100%;
`

export const TextContainer = styled.span`
  width: 840px;
  height: 336px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-align: center;
`

export const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`

export const SubContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DrinkImg = styled.div`
  background-color: #F5F5F5;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 400px;
  height: 600px;
`

export const MoneyText = styled(Title)`
  font-size: 48px;
`

export const BottomContainer = styled.div`
  display: flex;
  gap: 90px;
  flex-direction: column;
`

export const RecommendContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const RecommendText = styled.span`
  padding: 0 10px 0 30px;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 380px;
  height: 40px;
`

export const CircleBox = styled.div`
  width: ${({size}) => size || 60}px;
  height: ${({size}) => size || 60}px;
  border-radius: 100%;
  background: ${({check, color}) => check ? color : '#EEEEEE'};
`

export const CircleTextBox = styled.div`
  position: relative;
`

export const CircleText = styled.span`
  position: absolute;
  top: 60px;
  left: 0;
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SelectedContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #FFC500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`

export const MoveButton = styled(CombineButton)`
  background: #FFF;
`