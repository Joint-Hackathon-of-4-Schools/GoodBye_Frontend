import React from "react";
import styled from "styled-components";

const MenuType = ({children, imageURL, ...args}) => {
  return (
    <Container
      img={imageURL}
      {...args}
    >
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
  background-image: url(${({img}) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
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
  font-weight: 400;
  text-align: center;
  white-space: pre-line;
`