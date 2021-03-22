import React, { useState } from "react"
import styled from "styled-components"
import AccountPopup from "./AccountPopup"
import Image from "../../assets/slicings/Teachers Page/Rectangle3.png"

const Hero = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = val => {
    console.log("im in handle", val)
    setOpenModal(val)
  }
  return (
    <HeroContainer>
      {openModal && <AccountPopup openModal={handleModal} />}
      <HeroAll>
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
          <Head2>Teachers / Schools</Head2>
        </WrittenText>
        <HeroContent>
          <HeroItems>
            <HeroItem style={{ borderRight: "2px solid hsla(0,0%,54.5%,.5)" }}>
              <HeroH1>Teachers:</HeroH1>
              <button onClick={() => handleModal(true)}>Create Account</button>
            </HeroItem>
            <HeroItem>
              <HeroH1>School Districts:</HeroH1>
              <button to="/">Get a Quote</button>
            </HeroItem>
          </HeroItems>
        </HeroContent>
      </HeroAll>
    </HeroContainer>
  )
}

export default Hero
const HeroContainer = styled.div`
  position: relative;
  top: -20px;
  height: 100vh;
`
const HeroAll = styled.div`
  display: flex;
  flex-direction: column;
`
const HeroBg = styled.div`
  position: relative;
  overflow: hidden;
`
const ImageBg = styled.image`
  width: 100%;
  height: auto;
`
const HeroContent = styled.div`
  position: relative;
  top: -80px;
  background-color: #303d4e;
  margin-bottom: 20px;
`
const HeroItems = styled.div`
  padding: 35px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const HeroItem = styled.div`
  height: 100%;
  padding: 5px 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Lato;
  button{
    text-transform: none;
    min-width: 250px;
    
    font-weight: 600;
    font-size: 1.4rem;
    color: #fff7d5;
    padding: 10px 55px;
    min-height: 70px;
    border-radius: 4px;
    line-height: 1.1;
    letter-spacing: -.5px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 20%);
    background-color: #f9a622;
    border: none;
    color: #fff;
}

  }
`
const HeroH1 = styled.div`
  color: #fff;
  font-family: Georgia, serif;
  font-size: 1.4rem;
  font-weight: 400;
  padding-bottom: 20px;
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
