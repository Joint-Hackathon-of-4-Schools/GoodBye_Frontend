import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 380px 0 320px;
  background: #FFC500;
`

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomBox = styled(TopBox)`
  gap: 60px;
`

export const Img = styled.img.attrs({
  alt: '로고 이미지'
})`
  width: ${({width}) => width || 400}px;
  height: ${({height}) => height || 400}px;
  object-fit: cover;
  object-position: center center;
`

export const Title = styled.span`
  font-family: Jockey One;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  height: 225px;
  display: flex;
  align-items: center;
`

export const Text = styled.span`
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
`