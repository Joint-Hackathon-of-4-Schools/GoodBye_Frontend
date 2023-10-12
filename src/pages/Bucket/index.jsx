import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Bucket = () => {
  const [step, setStep] = useState("");
  return (
    <>
      {step === "check" && (
        <S.Modal>
          <S.ModalTitle>결제하시겠습니까?</S.ModalTitle>
          <S.ModalButtonWrap>
            <S.ModalButton onClick={() => setStep("")}>아니요</S.ModalButton>
            <S.ModalButton onClick={() => setStep("pay")}>네</S.ModalButton>
          </S.ModalButtonWrap>
        </S.Modal>
      )}
      {step === "pay" && (
        <S.Modal>
          <S.CountTitle>주문이 완료되었습니다</S.CountTitle>
          <S.CountButton>주문 번호: n</S.CountButton>
          <Link to="/">
            <S.HomeButton>홈으로</S.HomeButton>
          </Link>
        </S.Modal>
      )}
      <S.Wrapper>
        <S.Title>
          장바구니
          <S.BackButton>돌아가기</S.BackButton>
        </S.Title>
        <S.MenuWrap>
          <S.MenuImg />
          <S.TitleWrap>
            <S.MenuName>하이</S.MenuName>
            <S.SmallName>수량: n개</S.SmallName>
            <S.MenuPrice>7,000원</S.MenuPrice>
          </S.TitleWrap>
        </S.MenuWrap>
      </S.Wrapper>
      <S.AllPrice>총 22,000원</S.AllPrice>
      <S.ButtonWrap>
        <S.Bwrap>
          <S.Button>주문 취소</S.Button>
          <S.Button onClick={() => setStep("check")}>결제 하기</S.Button>
        </S.Bwrap>
      </S.ButtonWrap>
    </>
  );
};

export default Bucket;
