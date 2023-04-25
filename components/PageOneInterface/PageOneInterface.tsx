import React, { useEffect, useRef } from "react"
import Image from 'next/image'
import spipaStyles from '../../styles/Spipa.module.css'
import pageOneStyles from '../../styles/PageOneInterface.module.css'
import pointer from "../../public/Pointer.png"
import NeonRed from '../NeonRed/NeonRed'

interface pageType {
  redIris: any,
  redPupilla: any,
  blackPupilla: any
}

export default function PageOneInterface({ redIris, redPupilla, blackPupilla }: pageType){

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
      mainContainer.current.classList.remove(pageOneStyles.mainContainerApear)
      mainContainer.current.classList.add(pageOneStyles.mainContainerDesapear)
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
    <div className={pageOneStyles.mainContainerApear} ref={mainContainer}>
      <button className={pageOneStyles.backButton} onClick={closeInterface} id="Backbutton">&lt;- Volver</button>
      <div className={pageOneStyles.photoAndHelp}>
        <div className={pageOneStyles.photoContainer}>
          <NeonRed />
          <div className={pageOneStyles.photoWord} onClick={photoWordToRed} ref={photoWord}>
            <div className={pageOneStyles.wordOpacity}></div>
            Fotografia
          </div>
          <div className={pageOneStyles.photo}></div>
        </div>
        <div className={pageOneStyles.help}>
          <NeonRed />
        <div className={pageOneStyles.HTMLWord}>
          <div className={pageOneStyles.wordOpacity} />
          Ayuda
        </div>
          <Image src={pointer} alt="1" width="fill" height="fill" />
          <h2>La palabra blanca de cada recuadro permite interactuar.</h2>
          </div>
      </div>
      <div className={pageOneStyles.infoContainer}>
        <div className={pageOneStyles.infoWord} onClick={infoWordToRed} ref={infoWord}>
          <div className={pageOneStyles.wordOpacity}></div>
          Informacion
        </div>
        <div className={pageOneStyles.info}>
          <h1>Nombre: <span>Gian Franco Lombardini</span></h1>
          <h1>Edad: <span>35</span></h1>
          <h1>Ubicacion: <span>Buenos Aires</span></h1>
          <h1>Estado: <span>FreeLancer</span></h1>
          <h1>Experiencia: <span>X años</span></h1>
          <h1>Especializacion: <span>Frontend</span></h1>
          <h1>Actualmente: <span>Estudiando Nextjs</span></h1>
        </div>
        <NeonRed />
      </div>
    </div>
  )
}