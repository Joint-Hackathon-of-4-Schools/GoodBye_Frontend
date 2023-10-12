import React from "react";
import styled from "styled-components";

const MenuType = ({children, imageURL, ...args}) => {
  return (
    <Container
      {...args}
    >
      <Img src={imageURL} />
      <TextBox>
        {children}
      </TextBox>
    </Container>
  )
}

export default MenuType;

const Container = styled.div`
  width: 200px;
  height: 200px;
  background: #F5F5F5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const Img = styled.img.attrs({
  alt: '음료 이미지'
})`
  width: 200px;
  height: calc(100% - 80px);
  object-fit: contain;
  object-position: center center;
`

const TextBox = styled.span`
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  white-space: pre-line;
`