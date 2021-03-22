import React from "react"
import styled from "styled-components"
import Image from "../../assets/slicings/Families and Individuals Page/Rectangle3.png"

const Hero = () => {
  return (
    <div>
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
        <WrittenText>
          <Head1>DeltaMath for</Head1>
          <Head2>Families / Individuals</Head2>
        </WrittenText>
      </HeroContainer>
    </div>
  )
}

export default Hero
const HeroContainer = styled.div`
  position: relative;
  top: -45px;
  height: 100vh;
`
const HeroBg = styled.div`
  position: relative;
  overflow: hidden;
`
const ImageBg = styled.image`
  width: 100%;
  height: auto;
`
const WrittenText = styled.div`
  color: #fff;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Head1 = styled.h3`
  font-family: Lato, sans-serif;
  letter-spacing: 0.4px;
  font-size: 1.4rem;
  font-weight: 550;
`
const Head2 = styled.h1`
  font-family: Georgia, serif;
  font-weight: 500;
  font-size: 3.5rem;
  margin-top: 20px;
  line-height: 0.8;
`
