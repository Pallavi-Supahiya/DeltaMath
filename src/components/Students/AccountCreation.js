import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import Image from "../../assets/slicings/Students Page/Rectangle17.png"

const AccountCreation = () => {
  return (
    <Account>
      <QuickTour>
        <QuickImage>
          <img src={Image} alt="img1" />
        </QuickImage>
        <QuickInfo>
          <Title>Watch a quick tour of</Title>
          <Title
            style={{
              paddingBottom: "30px",
              borderBottom: "2px solid #a5a5a5",
            }}
          >
            DeltaMath for Students.
          </Title>
          <button
            round="true"
            style={{
              backgroundColor: "transparent",
              color: "inherit",
              border: "2px solid black",
              marginTop: "50px",
              marginBottom: "20px",
            }}
          >
            Create Account
          </button>
        </QuickInfo>
      </QuickTour>
    </Account>
  )
}

export default AccountCreation
const Account = styled.div`
  background-color: #ecf4f7;
  padding-top: 10px;
  padding-bottom: 10px;
`
const QuickTour = styled.div`
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const QuickImage = styled.div`
  padding-left: 80px;
`
const QuickInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 60px;
  button {
    font-size: 1rem;
    font-weight: 550;
    text-transform: none;
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 4px;
    letter-spacing: -1px;
    padding: 15px 35px;
    color: #303d4e;
    border: 0.3px solid #303d4e;
  }
`
const Title = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  font-family: inherit;
  color: #303d4e;
  font-weight: 600;
  padding-bottom: 5px;
`
