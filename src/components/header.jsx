import React from "react";
import styled from "styled-components";
import Logo from "../asset/Logo.png"

const Header = () => {

  return (
    <Container>
      <Img src={Logo}/>
      <Text>CAFE in BUSAN</Text>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 1080px;
  height: 400px;
  background: #FFC500;
`

const Img = styled.img.attrs({
  alt: '로고 이미지'
})`
  width: 225px;
  height: 225px;
  object-fit: cover;
  object-position: center center;
`

const Text = styled.span`
  font-family: Jockey One;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`