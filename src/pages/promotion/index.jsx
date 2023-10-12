import React from "react";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import Logo from "../../asset/Logo.png";
import Click from "../../asset/Click.png"

const Promotion = () => {
  const navigate = useNavigate();

  return (
    <_.Container onClick={() => {
        localStorage.removeItem('orderList');
        navigate('/main')
      }}>
      <_.TopBox>
        <_.Img src={Logo}/>
        <_.Title>CAFE in BUSAN</_.Title>
      </_.TopBox>
      <_.BottomBox>
        <_.Text>주문하려면 터치하세요</_.Text>
        <_.Img src={Click} width={120} height={200}/>
      </_.BottomBox>
    </_.Container>
  )
}

export default Promotion;