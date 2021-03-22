import React from "react"
import styled from "styled-components"

import Image from "../../assets/slicings/Contact Page/Rectangle 7.png"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg>
          <img
            src={Image}
            alt="bg"
            type="img/png"
            style={{ width: "100%", height: "100%" }}
          />
        </ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroP>Frequently asked questions</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
const HeroContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.99;
`

const HeroBg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.99;
`

const ImageBg = styled.image`
  width: 100%;
  height: auto;
`

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const HeroP = styled.p`
  font-size: 35px;
  font-family: Georgia;
  font-weight: 500;
  max-width: 520px;
  line-height: 1.35;
  margin-bottom: 50px;
`
