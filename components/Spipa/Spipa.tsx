import React, { useEffect, useRef } from "react"
import spipaStyles from '../../styles/Spipa.module.css'

interface pageType {
  page: string,
  redIris: any,
  redPupilla: any,
  blackPupilla: any
}

export default function Spipa({ page, redIris, redPupilla, blackPupilla }: pageType) {

  const dronShadow = useRef<HTMLHeadingElement>(null)
  const dronBody = useRef<HTMLHeadingElement>(null)
  const  eyelid = useRef<HTMLHeadingElement>(null)
  const one = useRef<HTMLHeadingElement>(null)
  const two = useRef<HTMLHeadingElement>(null)
  const three = useRef<HTMLHeadingElement>(null)
  const four = useRef<HTMLHeadingElement>(null)
  
  useEffect(() =>{
    if(page === "apearDrone"){
      if(dronBody.current) dronBody.current.classList.add(spipaStyles.dronBodyApear)
      if(dronShadow.current) dronShadow.current.classList.add(spipaStyles.dronShadowApear)
      if(eyelid.current) eyelid.current.classList.add(spipaStyles.dronEyelidOpen)
      if(one.current) one.current.classList.add(spipaStyles.oneOpacity)
      if(two.current) two.current.classList.add(spipaStyles.twoOpacity)
      if(three.current) three.current.classList.add(spipaStyles.threeOpacity)
      if(four.current) four.current.classList.add(spipaStyles.fourOpacity)

      setTimeout(() =>{
        if(dronShadow.current) dronShadow.current.style.display = "none"
      }, 9000)
    }else{
      if(dronBody.current) dronBody.current.style.top = "35%"
      if(dronShadow.current) dronShadow.current.style.display = "none"
      if(eyelid.current) eyelid.current.style.top = "-75%"
      if(redIris.current) redIris.current.classList.add(spipaStyles.redIrisIn)
      if(redPupilla.current) redPupilla.current.classList.add(spipaStyles.RedPupillaIn)
      if(blackPupilla.current) blackPupilla.current.classList.add(spipaStyles.eyeSquare)
    }
  }, [])

  function toPage(page: string){
    if(page === "one") window.location.replace('http://localhost:3000/PageOne')
    if(page === "two") window.location.replace('http://localhost:3000/PageTwo')
    if(page === "three") window.location.replace('http://localhost:3000/PageThree')
    if(page === "four") window.location.replace('http://localhost:3000/PageFour')
  }

  return (
    <div>
      <div className={spipaStyles.dronBody} ref={dronBody}>
        <div className={spipaStyles.radar} />
        <div className={spipaStyles.rightStick} />
        <div className={spipaStyles.rightTopWingBorder}>
          <div className={`${spipaStyles.rightTopWing} ${page === "apearDrone" ? spipaStyles.pointerTimer : spipaStyles.pointer}`} onClick={() => toPage("three")}>
            <div className={`${spipaStyles.number} ${spipaStyles.three}`} ref={three}>3</div>
            <div className={`${spipaStyles.verticalLineOne} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.verticalLineTwo} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineOne} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineTwo} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
          </div>
        </div>
        <div className={spipaStyles.rightBottomWingBorder}>
          <div className={`${spipaStyles.rightBottomWing} ${page === "apearDrone" ? spipaStyles.pointerTimer : spipaStyles.pointer}`} onClick={() => toPage("four")}>
            <div className={`${spipaStyles.number} ${spipaStyles.four}`} ref={four}>4</div>
            <div className={`${spipaStyles.verticalLineOne} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.verticalLineTwo} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineOne} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineTwo} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
          </div>
        </div>
        <div className={spipaStyles.leftStick} />
        <div className={spipaStyles.leftTopWingBorder}>
          <div className={`${spipaStyles.leftTopWing} ${page === "apearDrone" ? spipaStyles.pointerTimer : spipaStyles.pointer}`} onClick={() => toPage("one")}>
            <div className={`${spipaStyles.number} ${spipaStyles.one}`} ref={one}>1</div>
            <div className={`${spipaStyles.verticalLineOne} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.verticalLineTwo} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineOne} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineTwo} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
          </div>
        </div>
        <div className={spipaStyles.leftBottomWingBorder}>
          <div className={`${spipaStyles.leftBottomWing} ${page === "apearDrone" ? spipaStyles.pointerTimer : spipaStyles.pointer}`} onClick={() => toPage("two")}>
            <div className={`${spipaStyles.number} ${spipaStyles.two}`} ref={two}>2</div>
            <div className={`${spipaStyles.verticalLineOne} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.verticalLineTwo} ${page === "apearDrone" && spipaStyles.verticalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineOne} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
            <div className={`${spipaStyles.horizontalLineTwo} ${page === "apearDrone" && spipaStyles.horizontalAnimated}`} />
          </div>
        </div>
        <div className={spipaStyles.dronEyelidContainer}>
          <div className={spipaStyles.dronSclera} />
          <div className={spipaStyles.dronRedIris} ref={redIris}/>
          <div className={spipaStyles.dronRedPupilla} ref={redPupilla}/>
          <div className={spipaStyles.dronBlackPupilla} ref={blackPupilla}/>
          <div className={spipaStyles.dronEyelid} ref={eyelid}/>
        </div>
        <div className={spipaStyles.dronBlackFilter} />
        <div className={spipaStyles.dronShadow} ref={dronShadow}/>
      </div>
    </div>
  )
}