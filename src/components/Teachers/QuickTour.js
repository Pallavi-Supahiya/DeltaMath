import React from "react"
import styled from "styled-components"
import Image from "../../assets/slicings/Teachers Page/Rectangle15.png"
import { Button } from "../Button"

const QuickTour = () => {
  return (
    <Container>
      <QuickContainer>
        <TourContainer>
          <QuickTourImage>
            <img src={Image} alt="img" />
          </QuickTourImage>
          <QuickTourInfo>
            <Heading>
              <h2 style={{ paddingBottom: "5px" }}>Watch a quick tour of</h2>
              <h2
                style={{
                  padding: "0 10px 30px",
                  borderBottom: "2px solid #a5a5a5",
                }}
              >
                DeltaMath for Teachers
              </h2>
            </Heading>
            <Bottom>
              <Heading>
                <h2 style={{ paddingBottom: "10px", fontSize: "1.6rem" }}>
                  Get Started
                </h2>
              </Heading>
              <BottomHalf>
                <TeachersTour>
                  <TourTitle>
                    <p>Taechers:</p>
                  </TourTitle>
                  <button to="/">Create Account</button>
                </TeachersTour>
                <SchoolsTour>
                  <TourTitle>
                    <p>School Districts:</p>
                  </TourTitle>
                  <button to="/">Get a Quote</button>
                </SchoolsTour>
              </BottomHalf>
            </Bottom>
          </QuickTourInfo>
        </TourContainer>
      </QuickContainer>
    </Container>
  )
}

export default QuickTour
const Container = styled.div`
  background-color: #fafafa;
  padding-bottom: 80px;
`
const QuickContainer = styled.div`
  background-color: #303d4e;

  box-sizing: border-box;
`
const TourContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const QuickTourImage = styled.div`
  padding-left: 130px;
  padding-right: 20px;
`
const QuickTourInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
  text-align: center;
  padding-right: 100px;
  padding-left: 20px;
`
const Heading = styled.div`
  font-family: Lato, serif;
  color: #fff;
  font-size: 1.3rem;
  h1 {
    font-weight: 600;
    padding-bottom: 5px;
  }
`
const Bottom = styled.div`
  padding-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BottomHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  button {
    font-family: Lato;
    font-weight: 600;
    font-size: 1.1rem;
    color: #fff7d5;
    padding: 10px 30px;
    min-height: 50px;
    border-radius: 4px;
    line-height: 1.1;
    letter-spacing: -0.5px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 20%);
    font-weight: 550;
    text-transform: none;
    min-width: 180px;
    border: none;
    background-color: #f9a622;
  }
`
const TeachersTour = styled.div`
  height: 100%;
  padding: 5px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TourTitle = styled.div`
  color: #fff;

  padding-bottom: 15px;
  p {
    font-family: Georgia, serif;
    font-size: 1.3rem;
    font-weight: 400;
  }
`
const SchoolsTour = styled.div`
  height: 100%;
  padding: 5px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
