import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.div`
  width: 100%;
  height: 120px;
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 60px;
  position: relative;
`;

export const BackButton = styled.button`
  width: 200px;
  height: 80px;
  background-color: #f5f5f5;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 80px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const MenuWrap = styled.div`
  width: 800px;
  height: 200px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const MenuImg = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 60px;
  border-radius: 20px;
  border: none;
  background-color: #d9d9d9;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const TitleWrap = styled.div`
  width: 400px;
  height: 120px;
`;

export const MenuName = styled.h1`
  width: 100%;
  font-size: 40px;
  margin: 0;
`;

export const SmallName = styled.p`
  font-size: 32px;
  margin: 0;
`;

export const MenuPrice = styled.p`
  font-size: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
`;

export const AllPrice = styled.div`
  width: 100%;
  height: 120px;
  font-size: 64px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 300px;
  font-size: 40px;
  background-color: #ffc500;
  position: relative;
`;

export const Bwrap = styled.div`
  width: 920px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  width: 400px;
  height: 120px;
  border-radius: 20px;
  border: none;
  background-color: #fff;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const Modal = styled.div`
  width: 600px;
  height: 800px;
  background-color: #ffc500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
`;

export const ModalTitle = styled.p`
  font-size: 40px;
  margin: 219px 0 201px 0;
`;

export const ModalButtonWrap = styled.div`
  width: 460px;
  height: 120px;
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  width: 200px;
  height: 120px;
  background-color: #f5f5f5;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
`;

export const CountTitle = styled.p`
  font-size: 40px;
  margin: 219px 0 121px 0;
`;

export const CountButton = styled.button`
  font-size: 32px;
  width: 460px;
  height: 168px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background-color: #fff;
`;

export const HomeButton = styled.button`
  width: 300px;
  height: 80px;
  border: none;
  font-size: 30px;
  border-radius: 20px;
  background-color: #fff;
`;

export const Box = styled.div`
  width: 800px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
