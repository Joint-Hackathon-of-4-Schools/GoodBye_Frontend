import React from "react";
import styled from "styled-components";

const MenuBox = ({ title, money = '', img, level, ...args }) => {
  return (
    <Container
      img={img}
      level={level}
      {...args}
    >
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
  background: #BBB;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: flex-end;
`

const TextFlex = styled.div`
    display: flex;
`

const LeftTextBox = styled.span`
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  white-space: pre-line;
`

const RightTextBox = styled(LeftTextBox)`
    width: 160px;
`