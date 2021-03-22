import React from "react"
import styled from "styled-components"

import Image from "../assets/slicings/Rectangle3.png"

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
            Math done{" "}
            <span>
              right<span></span>
            </span>
            .
          </HeroH1>
          <HeroH1>Depth, clarity, and rigor.</HeroH1>
          <HeroP>
            <h3>Built by teachers. Used by millions.</h3>
          </HeroP>
        </HeroItems>
        <Buttons>
          <button to="/teachersSchools" style={{ fontFamily: "Lato" }}>
            For Teachers/<br></br>Schools
          </button>
          <button style={{ fontFamily: "Lato" }} to="/familiesIndividuals">
            For Families/<br></br>Individuals
          </button>
          <button style={{ fontFamily: "Lato" }} to="/students">
            For Students
          </button>
        </Buttons>
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
  height: 110vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -123px;
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
  height: 100%;

  width: 100%;

  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;

  max-height: 100%;
  padding-left: 85px;
  padding-top: 220px;
  padding-bottom: 110px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;

  margin: 0 auto;
  left: 70px;
  position: absolute;
`
const HeroItems = styled.div`
  color: #fff;
`
const HeroH1 = styled.h1`
  font-family: Georgia, serif;
  font-weight: 500;
  font-size: 3.5rem;
  margin: 30px 0;
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
  margin-top: 40px;
  font-family: Lato;

  h3 {
    font-size: 1.875rem;
    font-weight: 400;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 80px;
  font-family: Lato;

  button {
    text-transform: none;
    margin-right: 20px;
    fontfamily: Lato;
    font-weight: 600;
    font-size: 1.25rem;
    color: #fff7d5;
    padding: 10px 55px;
    min-height: 70px;
    border-radius: 4px;
    line-height: 1.1;
    letter-spacing: -0.5px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 20%);
    background-color: #f9a622;
    border: none;
  }
`
