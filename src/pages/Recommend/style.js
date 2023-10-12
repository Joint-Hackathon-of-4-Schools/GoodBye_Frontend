import styled from "styled-components";

export const GrayBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #d9d9d9;
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
  border: none;
`;
