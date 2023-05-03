import React, { useRef } from "react"
import Spipa from "../components/Spipa/Spipa"
import styled from "styled-components"
import PageThreeInterface from "../components/PageThreeInterface/PageThreeInterface"

export default function PageThree() {
  let redIris = useRef<HTMLHeadingElement>(null)
  let redPupilla = useRef<HTMLHeadingElement>(null)
  let blackPupilla = useRef<HTMLHeadingElement>(null)

  return (
    <MainContainer>
      <Spipa
        page={"one"}
        redIris={redIris}
        redPupilla={redPupilla}
        blackPupilla={blackPupilla}
      />
      <PageThreeInterface 
        redIris={redIris}
        redPupilla={redPupilla}
        blackPupilla={blackPupilla}
      />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #2b2b2b;
  animation-name: backgroundOpacity;
  animation-duration: 7s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`