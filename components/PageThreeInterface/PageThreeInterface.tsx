import React, { useEffect, useRef } from "react"
import spipaStyles from '../../styles/Spipa.module.css'
import NeonRed from '../NeonRed/NeonRed'
import pageThreeStyles from '../../styles/PageThreeInterface.module.module.css'

interface pageType {
  redIris: any,
  redPupilla: any,
  blackPupilla: any
}

export default function PageThreeInterface({ redIris, redPupilla, blackPupilla }: pageType){

  const mainContainer = useRef<HTMLHeadingElement>(null)
  const photoWord = useRef<HTMLHeadingElement>(null)
  const infoWord = useRef<HTMLHeadingElement>(null)

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
      mainContainer.current.classList.remove(pageThreeStyles.mainContainerApear)
      mainContainer.current.classList.add(pageThreeStyles.mainContainerDesapear)
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
    <div className={pageThreeStyles.mainContainerApear} ref={mainContainer}>
      <button className={pageThreeStyles.backButton} onClick={closeInterface} id="Backbutton">&lt;- Volver</button>
      <h1 className={pageThreeStyles.Tittle}>Trayectoria</h1>
      <div className={pageThreeStyles.yearsContainer}>
        <div className={pageThreeStyles.x19x20}>
          <NeonRed />
          <div className={`${pageThreeStyles.word} ${pageThreeStyles.x19x20Word}`} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageThreeStyles.wordOpacity}>
              2019-2020
            </div>
          </div>
          <h3>Primer contacto con la programación en el inicio de la carrera de ingenieria electronica en la UTN.</h3>
          <h3>Dos años de programación en C.</h3>
        </div>
        <div className={pageThreeStyles.x21x22}>
          <NeonRed />
          <div className={`${pageThreeStyles.word} ${pageThreeStyles.x21x22Word}`} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageThreeStyles.wordOpacity}>
              2021-2022
            </div>
          </div>
          <h3>Decisión de dejar la carrera para estudiar programación web.</h3>
          <h3>Inicio de curso HTML, CSS y JS de plataforma 5, tres meses de duración.</h3>
          <h3>Certificado de finalización del curso con mi propio portafolio junto con tres proyectos personales.</h3>
          <h3>Decisión de comenzar a estudiar de manera autodidacta al no tener dinero para pagar bootcaps y no preferir los modelos que planteaban.</h3>
          <h3>Inicio de mi primer proyecto real (e-commerce) gracias a los conocimientos adquiridos de manera autodidacta y de la plataforma de Platzi.</h3>
        </div>
        <div className={pageThreeStyles.x23}>
          <NeonRed />
          <div className={`${pageThreeStyles.word} ${pageThreeStyles.x23Word}`} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageThreeStyles.wordOpacity}>
              2023
            </div>
          </div>
          <h3>Finalizacion del e-commerce.</h3>
          <h3>Inicio de mi portfolio 2.0, curriculum y perfil de linkedin.</h3>
          <h3>Preparación para primeras entrevistas.</h3>
        </div>
      </div>
    </div>
  )
}