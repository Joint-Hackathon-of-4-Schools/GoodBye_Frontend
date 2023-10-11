import React from "react";
import styled from "styled-components";

const MenuOrderBox = ({title, amount, OrderChange}) => {
  return (
    <Container>
      <TextBox>{title}</TextBox>
      <CountBox>
        <ChangeButton onClick={() => OrderChange(title, 1)}>
          <Circle />
          <AmountText>+</AmountText>
        </ChangeButton>
        <AmountText>{amount}</AmountText>
        <ChangeButton onClick={() => OrderChange(title, -1)}>
          <Circle />
          <AmountText>-</AmountText>
        </ChangeButton>
      </CountBox>
    </Container>
  )
}

export default MenuOrderBox;

const Container = styled.div`
  min-width: 180px;
  height: 160px;
  border-radius: 20px;
  background: #D9D9D9;
  position: relative;
`

const TextBox = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

const CountBox = styled.div`
  top: 0;
  right: 0;
  padding: 20px 0;
  height: 160px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
`

const ChangeButton = styled.div`
  width: 36px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Circle = styled.div`
  width: 25.714px;
  height: 20px;
  border-radius: 20px;
  background: #F5F5F5;
`

const AmountText = styled.span`
  width: 36px;
  height: 40px;
  text-align: center;
  vertical-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`