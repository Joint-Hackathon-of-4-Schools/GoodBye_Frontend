import React from "react";
import styled from "styled-components";

const MenuBox = ({ title, money = '', imageURL, level, ...args }) => {
  return (
    <Container
      level={level}
      {...args}
    >
      <Img src={imageURL}/>
      <TextFlex>
        <LeftTextBox>{title}</LeftTextBox>
        <RightTextBox>{money.toLocaleString()}원</RightTextBox>
      </TextFlex>
    </Container>
  )
}

export default MenuBox;

const Container = styled.div`
  width: 360px;
  height: ${({level}) => level === 1 ? 600 : level === 2 ? 320 : 200}px;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
`

const Img = styled.img.attrs({
  alt: '음료 이미지'
})`
  width: 360px;
  height: calc(100% - 80px);
  object-fit: contain;
  object-position: center center;
`

const TextFlex = styled.div`
    display: flex;
`

const LeftTextBox = styled.span`
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  vertical-align: center;
  white-space: pre-line;
`

const RightTextBox = styled(LeftTextBox)`
    width: 160px;
`