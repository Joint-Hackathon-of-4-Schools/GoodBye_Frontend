import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const Placard = styled.div`
  display: flex;
  width: 1080px;
  height: 400px;
  background: #000;
`

export const ContentBox = styled.div`
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  gap: 40px;
`

export const MenuContainer = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const MenuBar = styled(MenuContainer)`
  gap: 40px;
`

export const MenuBox = styled.div`
  width: 200px;
  height: 200px;
  background: #BBB;
`
