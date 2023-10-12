import styled from "styled-components";

export const GrayBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffc500;
  position: relative;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 1120px;
  position: relative;
`;

export const ButtonWrap = styled.div`
  width: 600px;
  height: 840px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  width: 600px;
  height: 240px;
  font-size: 48px;
  border-radius: 20px;
  background-color: #ffc500;
  border: 12px solid black;
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%; /* 48px */
`;

export const ContentWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  height: 120px;
  padding-top: 240px;
  padding-left: 460px;
  .img1 {
    width: 460px;
    height: 120px;
  }
`;
