import React, { useEffect, useRef } from "react"
import Image from 'next/image'
import spipaStyles from '../../styles/Spipa.module.css'
import pageFourStyles from '../../styles/PageFourInterface.module.css'
import pointer from "../../public/Pointer.png"
import NeonRed from '../NeonRed/NeonRed'

interface pageType {
  redIris: any,
  redPupilla: any,
  blackPupilla: any
}

export default function PageFourInterface({ redIris, redPupilla, blackPupilla }: pageType){

  const mainContainer = useRef<HTMLHeadingElement>(null)
  const photoWord = useRef<HTMLHeadingElement>(null)
  const infoWord = useRef<HTMLHeadingElement>(null)
  
  useEffect(() =>{
    const Backbutton = document.getElementById("Backbutton")
    if(Backbutton) Backbutton.setAttribute("disabled","")
    setTimeout(() =>{
      if(Backbutton) Backbutton.removeAttribute("disabled")
    }, 8000)
  }, [])

  function closeInterface (){
    if(redIris.current){
      redIris.current.classList.remove(spipaStyles.redIrisIn)
      redIris.current.classList.add(spipaStyles.redIrisOut)
    }
    if(redPupilla.current){
      redPupilla.current.classList.remove(spipaStyles.RedPupillaIn)
      redPupilla.current.classList.add(spipaStyles.RedPupillaOut)
    }
    if(blackPupilla.current){
      blackPupilla.current.classList.remove(spipaStyles.eyeSquare)
      blackPupilla.current.classList.add(spipaStyles.eyeCircle)
    }
    if(mainContainer.current){
      mainContainer.current.classList.remove(pageFourStyles.mainContainerApear)
      mainContainer.current.classList.add(pageFourStyles.mainContainerDesapear)
    }
  }

  function photoWordToRed (){
    if(photoWord.current && photoWord.current.style.cursor !== "auto"){
      photoWord.current.style.color = "red"
      photoWord.current.style.cursor = "auto"
    }
  }
  function infoWordToRed (){
    if(infoWord.current && infoWord.current.style.cursor !== "auto"){
      infoWord.current.style.color = "red"
      infoWord.current.style.cursor = "auto"
    }
  }

  return(
    <div className={pageFourStyles.mainContainerApear} ref={mainContainer}>
      <button className={pageFourStyles.backButton} onClick={closeInterface} id="Backbutton">&lt;- Volver</button>
      <h1 className={pageFourStyles.Tittle}>Sobre mi</h1>
      <div className={pageFourStyles.aboutMe}>
        <div className={pageFourStyles.destination}>
          <NeonRed />
          <div className={`${pageFourStyles.word} ${pageFourStyles.destinationWord}`} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageFourStyles.wordOpacity}>
              Objetivo
            </div>
          </div>
          <h3>Mi objetivo personal es poder migrar en un futuro, y para esto tendre que convertirme en un senior con un buen nivel de ingles.</h3>
          <h3>Por eso programo y practico mi ingles sin falta todos los dias.</h3>
        </div>
        <div className={pageFourStyles.referents}>
          <NeonRed />
          <div className={`${pageFourStyles.word} ${pageFourStyles.referentsWord}`} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageFourStyles.wordOpacity}>
              Referentes
            </div>
          </div>
          <h3>HolaMundo: Mi primer referente y el causante de que me dedicara a la programación.</h3>
          <h3>Midudev: Streamer y youtuber español del cual aprendi todo sobre ReactJS.</h3>
          <h3>JuanDC: Mi profesor favorito de platzi, tiene las clases mas divertidas e informativas de la plataforma.</h3>
          <h3>Freddy Vega: Uno de los latinos mas influyentes del TI. Su curso de GIT en su plataforma de platzi es uno de los mejores cursos que vi.</h3>
          <h3>Otros: Victor Robles, Jesse Showalter, Salomon Sanchez, Online Tutorials.</h3>
        </div>
        <div className={pageFourStyles.mode}>
          <NeonRed />
          <div className={`${pageFourStyles.word} ${pageFourStyles.modeWord}`} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageFourStyles.wordOpacity}>
              Modos
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}