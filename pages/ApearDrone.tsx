import Spipa from "../components/Spipa/Spipa"
import styled from "styled-components"

export default function ApearDrone() {
  return (
    <MainContainer>
      <Spipa page={"apearDrone"}/>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: black;
  animation-name: backgroundOpacity;
  animation-duration: 7s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes backgroundOpacity {
    0%{
      background-color: black;
    }
    80%{
      background-color: black;
    }
    100%{
      background-color: #2b2b2b;
    }
  }
`