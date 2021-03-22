import React from "react"
import styled from "styled-components"
import { Button } from "../Button"

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
          <HeroP>Interested in creating an account or getting a quote?</HeroP>
          <Buttons>
            <button to="/teachersSchools" style={{ fontFamily: "Lato" }}>
              Teachers/Schools
            </button>
            <button style={{ fontFamily: "Lato" }} to="/familiesIndividuals">
              Families/Individuals
            </button>
            <button style={{ fontFamily: "Lato" }} to="/students">
              Students
            </button>
          </Buttons>
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
    fontfamily: inherit;
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
