import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const Placard = styled.div`
  display: flex;
  width: 1080px;
  height: 400px;
`

export const ContentBox = styled.div`
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`

export const MenuContainer = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const MenuBar = styled(MenuContainer)`
  gap: 40px;
`

export const MenuContent = styled.div`
  display: grid;
  gap: ${({level}) => level === 3 ? '80px 40px' : '40px'};
  grid-template-columns: repeat(2, 1fr);
`

export const LeftBottomContent = styled.div`
  display: flex;
  width: 280px;
  height: 400px;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
`

export const RightBottomContent = styled(Container)`
  width: 800px;
  background: #FFFFFF;
`

export const RecommendButton = styled.div`
  display: flex;
  width: 200px;
  height: 340px;
  border-radius: 20px;
  background: #FFC500;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 12.8px;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 100px;
  letter-spacing: 12.8px;
`

export const BottomBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background: #FFC500;
  box-sizing: border-box;
`

export const BottomTitleBox = styled(BottomBox)`
  justify-content: flex-end;
  padding: 0 40px;
`

export const BottomOrderBox = styled(BottomBox)`
  justify-content: space-between;
  padding: 0 60px;
`

export const BottomTitle = styled.span`
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
`

export const OrderButton = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 20px;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
`

export const BottomMenuBox = styled.div`
  width: 800px;
  height: 200px;
  box-sizing: border-box;
  padding: 0 20px;
  gap: 40px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`