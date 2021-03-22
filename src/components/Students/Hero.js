import React, { useState } from "react"
import styled from "styled-components"
import AccountPopup from "./AccountPopup"
import AccountCreation from "../Students/AccountCreation"
import Image from "../../assets/slicings/Students Page/Rectangle3.png"

const Hero = () => {
  const [openAccountModal, setOpenAccountModal] = useState(false)

  const handleAccountModal = val => {
    console.log("im in handle", val)
    setOpenAccountModal(val)
  }
  return (
    <>
      <HeroContainer>
        {openAccountModal && (
          <AccountPopup openAccountModal={handleAccountModal} />
        )}
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
            <Head2>Students</Head2>
          </WrittenText>
          <CreateAccount>
            <DivCreation>
              <Description>
                <Line>
                  Ready to begin? Just click the 'Create Account' button.
                </Line>
                <Line>
                  (You'll need your teacher's code to create an account.)
                </Line>
              </Description>
              <Creation>
                <button onClick={() => handleAccountModal(true)}>
                  Create Account
                </button>
              </Creation>
            </DivCreation>
          </CreateAccount>
        </HeroAll>
      </HeroContainer>
      <AccountCreation />
    </>
  )
}

export default Hero
const HeroContainer = styled.div`
  position: relative;
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
const CreateAccount = styled.div`
  position: relative;
  top: -100px;
  background-color: #303d4e;
  margin-bottom: -100px;
`
const DivCreation = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const Description = styled.div`
  height: 100%;
  margin-right: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Line = styled.p`
  color: #fff;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 5px 0;
`
const Creation = styled.div`
  button {
    text-transform: none;
    font-family: inherit;
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
