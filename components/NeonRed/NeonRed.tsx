import React from "react"
import neonOpenner from '../../styles/NeonOpenner.module.css'

export default function NeonRed(){
  return(
    <div className={neonOpenner.openner}>
      <div className={neonOpenner.neonTop}></div>
      <div className={neonOpenner.neonBottom}></div>
      <div className={neonOpenner.neonRight}></div>
      <div className={neonOpenner.neonLeft}></div>
    </div>
  )
}