import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Modal = ({ type = 'request', closeModel = () => { }, acceptRequest = () => { }, title, text }) => {
  const Timer = useRef(null)

  useEffect(() => {
    if(type === 'alert') {
      if(Timer.current) {
        clearInterval(Timer.current)
        Timer.current = null;
      }

      Timer.current = setInterval(() => {
        acceptRequest()
        clearInterval(Timer.current)
        Timer.current = null;
      }, 10000)
    }

    return () => {
      if(Timer.current) {
        clearInterval(Timer.current)
        Timer.current = null;
      }
    }
  }, [acceptRequest, type])

  return (
    <Container onClick={type === 'request' ? closeModel : acceptRequest} >
      <ContentBox>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        {
          type === 'request' ?
            <BottomBox>
              <Button onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModel()
              }}
              >
                아니요
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  acceptRequest()
                }}
              >
                예
              </Button>
            </BottomBox>
            :
            <BottomResultBox>
              <resultText>{text}</resultText>
            </BottomResultBox>
        }
      </ContentBox>
    </Container>
  )
}

export default Modal;

const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 1080px;
    height: 1920px;
    background: rgba(0,0,0,0.3);
    z-index: 99;
`

const ContentBox = styled.div`
    width: 600px;
    height: 800px;
    background: #D9D9D9;
    border-radius: 20px;
    padding: 220px 70px 120px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.span`
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`

const BottomBox = styled.div`
  width: 460px;
  height: 120px;
  margin-top: 200px;
  display: flex;
  gap: 60px;
`

const BottomResultBox = styled(BottomBox)`
  margin-top: 120px;
`

const Button = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 20px;
  background: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const resultText = styled(Button)`
  width: 460px;
  height: 168px;
  font-size: 32px;
`