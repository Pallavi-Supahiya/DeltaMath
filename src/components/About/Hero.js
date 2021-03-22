import React from "react"
import styled from "styled-components"
import Image from "../../assets/slicings/About Page/Rectangle 3.png"

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
          <HeroH1>
            Built by{" "}
            <span>
              teachers<span></span>
            </span>
            .
          </HeroH1>
          <HeroP>
            <h3>DeltaMath comes straight from the source.</h3>
          </HeroP>
          <HeroP>
            <h3>It's proven learning that you can trust.</h3>
          </HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
const HeroContainer = styled.div`
  background-color: #fafafa;
  position: relative;
  top: -82px;
  height: auto;
`
const HeroBg = styled.div`
  position: relative;
  overflow: hidden;
`
const ImageBg = styled.image`
  width: 100%;
  height: auto;
`
const HeroItems = styled.div`
  color: #fff;
`
const HeroH1 = styled.h1`
  font-family: Georgia, serif;
  font-weight: 500;
  font-size: 3.5rem;
  margin: 30px 0 40px 0;
  line-height: 0.8;

  span {
    position: relative;
    z-index: -1;
    font-family: inherit;

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-bottom: 6px solid #f9a622;
      z-index: -1;
    }
  }
`
const HeroP = styled.div`
  margin-top: 5px;
  font-family: Lato;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`
const HeroContent = styled.div`
  color: #fff;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-115%, 10%);

  align-items: flex-start;
`
