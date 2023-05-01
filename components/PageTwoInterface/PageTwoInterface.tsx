import React, { useEffect, useRef } from "react"
import Image from 'next/image'
import spipaStyles from '../../styles/Spipa.module.css'
import pageTwoStyles from '../../styles/PageTwoInterface.module.css'
import NeonRed from '../NeonRed/NeonRed'

interface pageType {
  redIris: any,
  redPupilla: any,
  blackPupilla: any
}

export default function PageTwoInterface({ redIris, redPupilla, blackPupilla }: pageType){

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
    if(mainContainer.current) {
      mainContainer.current.classList.remove(pageTwoStyles.mainContainerApear)
      mainContainer.current.classList.add(pageTwoStyles.mainContainerDesapear)
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
    <div className={pageTwoStyles.mainContainerApear} ref={mainContainer}>
      <button className={pageTwoStyles.backButton} onClick={closeInterface} id="Backbutton">&lt;- Volver</button>
      <h1 className={pageTwoStyles.Tittle}>Tecnologias/Proyectos</h1>
      <div className={pageTwoStyles.technologiesContainer}>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.HTMLWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            HTML
          </div>
          <div className={pageTwoStyles.HTMLImg} />
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.JSWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Javascript
          </div>
          <div className={pageTwoStyles.JSImg} />
          {/* <Image src={Javascript} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.GitWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Git
          </div>
          <div className={pageTwoStyles.GitImg} />
          {/* <Image src={Git} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.BootstrapWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Bootstrap
          </div>
          <div className={pageTwoStyles.BootstrapImg} />
          {/* <Image src={Bootstrap} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.ReactWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            React
          </div>
          <div className={pageTwoStyles.ReactImg} />
          {/* <Image src={react} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.NodeWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Node
          </div>
          <div className={pageTwoStyles.NodeImg} />
          {/* <Image src={Node} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.MongoDBWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            MongoDB
          </div>
          <div className={pageTwoStyles.MongoDBImg} />
          {/* <Image src={MongoDB} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.CSSWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            CSS
          </div>
          <div className={pageTwoStyles.CSSImg} />
          {/* <Image src={CSS} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.TypescriptWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Typescript
          </div>
          <div className={pageTwoStyles.TypescriptImg} />
          {/* <Image src={Typescript} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.GithubWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Github
          </div>
          <div className={pageTwoStyles.GithubImg} />
          {/* <Image src={Github} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.SassWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Sass
          </div>
          <div className={pageTwoStyles.SassImg} />
          {/* <Image src={Sass} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.StyledComponentsWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            StyledComponents
          </div>
          <div className={pageTwoStyles.StyledComponentsImg} />
          {/* <Image src={StyledComponents} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.ExpressWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Express
          </div>
          <div className={pageTwoStyles.ExpressImg} />
          {/* <Image src={Express} alt="1" width="fill" height="fill" /> */}
        </div>
        <div className={pageTwoStyles.technologySquare}>
          <NeonRed />
          <div className={`${pageTwoStyles.word} ${pageTwoStyles.NextWord}`}>
          <div className={pageTwoStyles.wordOpacity} />
            Next
          </div>
          <div className={pageTwoStyles.NextImg} />
          {/* <Image src={Next} alt="1" width="fill" height="fill" /> */}
        </div>
      </div>
      <div className={pageTwoStyles.projectsContainer}>
        <div className={pageTwoStyles.individualProjectContainer}>
          <div className={pageTwoStyles.projectSquare}>
            <NeonRed />
            <div className={`${pageTwoStyles.word} ${pageTwoStyles.firstPortfoliosWord}`}><p>Primer portfolio</p></div>
          </div>
          <div className={pageTwoStyles.sitesLinksContainer}>
            <div className={pageTwoStyles.githubIcon}></div>
            <div className={pageTwoStyles.webIcon}></div>
          </div>
        </div>
        <div className={pageTwoStyles.individualProjectContainer}>
          <a href="monicadeco.com" target="_blank" className={pageTwoStyles.projectSquare}>
            <NeonRed />
            <div className={`${pageTwoStyles.word} ${pageTwoStyles.realProjectWord}`}><p>Proyecto real</p></div>
          </a>
          <div className={pageTwoStyles.sitesLinksContainer}>
            <div className={pageTwoStyles.githubIcon}></div>
            <div className={pageTwoStyles.webIcon}></div>
          </div>
        </div>
        <div className={pageTwoStyles.individualProjectContainer}>
          <div className={pageTwoStyles.projectSquare}>
            <NeonRed />
            <div className={`${pageTwoStyles.word} ${pageTwoStyles.portfolio2Word}`}><p>Portfolio 2.0</p></div>
          </div>
          <div className={pageTwoStyles.sitesLinksContainer}>
            <div className={pageTwoStyles.githubIcon}></div>
          </div>
        </div>
      </div>
    </div>
  )
}