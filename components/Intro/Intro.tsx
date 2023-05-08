import React, { useRef, useEffect } from "react"
import Typewriter from 'typewriter-effect';

export default function Intro(){

  const containerRef = useRef<HTMLHeadingElement>(null)
  let lines = ""
  let brOrNot = ""
  let fold = ""
  if (typeof window !== "undefined") {
    if(window.matchMedia("(max-width: 991px)").matches) lines = "->"
    else lines = "---------------------------------->"
  }
  if (typeof window !== "undefined") {
    if(window.matchMedia("(max-width: 991px)").matches) brOrNot = "<br>"
  }
  if (typeof window !== "undefined") {
    if(window.matchMedia("(max-width: 300px)").matches) fold = "<br>"
  }

  useEffect(() =>{
    setTimeout(() =>{
      setInterval(toBottom, 100);
    }, 40000)
  }, [])

  const containerDisabled =  () =>{
    // if(containerRef.current){
    //   containerRef.current.classList.add('disapearText')
    // }
    // setTimeout(() =>{
    //   window.location.replace('http://localhost:3000/ApearDrone')
    // }, 1500)
  }

  function toBottom(){
    if(containerRef.current){
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  

  return(
    <div className="mainContainer" ref={containerRef}>
      {/* <button className="skipButton" onClick={containerDisabled}>Adelantar Introduccion</button> */}
      <Typewriter
        onInit={(tw) => {
          tw.changeDelay(30)
          .typeString(`20/08/3022`)
          .pauseFor(1500)
          .typeString('<br><br>Protocolo de diagnostico penitenciario ADX FLORENCE')
          .pauseFor(1500)
          .typeString('<br>Inicializando ')
          .changeDelay(400)
          .typeString('. . .')
          .pauseFor(400)
          .changeDelay(30)
          .typeString(`<br><br><span class="red">¡ADVERTENCIA!</span>`)
          .pauseFor(1000)
          .typeString('<br><br><span class="red">ANULACION MANUAL DETECTADA</span>')
          .pauseFor(1000)
          .typeString('<br><br><span class="red">SISTEMA DE SEGURIDAD CORRUPTO</span>')
          .pauseFor(1000)
          .typeString('<br><br><span class="red">INFORMANDO A FUERZAS ARMADAS </span>')
          .changeDelay(200)
          .typeString('<span class="red">. . .</span>')
          .pauseFor(400)
          .deleteChars(5)
          .typeString('<span class="red">. . .</span>')
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br><span class="red">NO HAY RESPUESTA</span>')
          .pauseFor(1500)
          .typeString('<br><br>Accediendo a la base de datos de la prision')
          .pauseFor(1500)
          .typeString('<br><br><span class="red">DETECTANDO INFORMACION DAÑADA</span>')
          .pauseFor(1500)
          .typeString('<br><br>Lista de reclusos parcialmente recuperada')
          .pauseFor(1500)
          .typeString('<br>Descomprimiendo ')
          .changeDelay(500)
          .typeString('. . .')
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br>Listando prisioneros:')
          .pauseFor(400)
          .changeDelay(1)
          .typeString(`<br>${brOrNot}Anthony Casso ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 16802-050`)
          .typeString(`<br>${brOrNot}Mutulu Shakur ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 83205-012`)
          .typeString(`<br>${brOrNot}Fares Khallafalla ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 34856-054`)
          .typeString(`<br>${brOrNot}Chevie Kehoe ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 21300-009`)
          .typeString(`<br>${brOrNot}Abdul Murad ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 37437-054`)
          .typeString(`<br>${brOrNot}Ali Al-Tamimi ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 48054-083`)
          .typeString(`<br>${brOrNot}Khalid al-Fawwaz ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 67497-054`)
          .typeString(`<br>${brOrNot}Mohammed Al-Moayad ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 62044-053`)
          .typeString(`<br>${brOrNot}Gian Franco Lombardini ${lines} <span class="green"> ++ESTADO++</span>${fold} ID: 20081-997`)
          .typeString(`<br>${brOrNot}Theodore Kaczynski ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 04475-046`)
          .typeString(`<br>${brOrNot}Clement Hampton ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 34854-054`)
          .typeString(`<br>${brOrNot}Salvador Magluta ${lines} <span class="red"> --ESTADO--</span>${fold} ID: 26012-037`)
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br>Seleccionando recluso ID: 20081-997 - NOMBRE: Gian Franco Lombardini')
          .pauseFor(1500)
          .typeString('<br>Iniciando interfaz grafica mas detallada... require reparacion')
          .changeDelay(200)
          .typeString('. . .')
          .pauseFor(400)
          .deleteChars(5)
          .typeString('. . .')
          .pauseFor(1500)
          .callFunction(containerDisabled)
          .start();
        }}/>
    </div>
  )
}