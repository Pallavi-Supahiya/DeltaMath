import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Image from "../assets/slicings/Rectangle3.png"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg>
          <img
            src={Image}
            type="img/png"
            style={{ width: "100%", height: "100%" }}
          />
        </ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>
            Math done <span>right</span>
          </HeroH1>
          <HeroH1>Depth, Clarity and Rigor</HeroH1>
          <HeroP>Built by teachers. Used by millions.</HeroP>
          <Button primary="true" big="true" round="true" to="/teachersSchools">
            For Teachers/Schools
          </Button>
          <Button
            primary="true"
            big="true"
            round="true"
            to="/familiesIndividuals"
          >
            For Families/Individuals
          </Button>
          <Button primary="true" big="true" round="true" to="/students">
            For Students
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
`

const HeroBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%
height: 100%
overflow: hidden;
`

const ImageBg = styled.image`
  
  width: 100%
  height: 100%
  -o-object-fit: cover;
  object-fit: cover;
  


`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh- 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
`
