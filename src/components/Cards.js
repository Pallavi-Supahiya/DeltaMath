import React from "react"
import styled from "styled-components"

import Vector1 from "../assets/slicings/VectorSmartObject-1.png"
import Vector2 from "../assets/slicings/VectorSmartObject-2.png"
import Vector3 from "../assets/slicings/VectorSmartObject-3.png"

const Cards = () => {
  return (
    <CardsContainer>
      <CardsWrapper>
        <CardWrapper>
          <ImageWrapper>
            <img
              src={Vector2}
              alt="v2"
              type="img/png"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-block",
                width: "112px",
                height: "53px",
              }}
            />
          </ImageWrapper>

          <TextWrapper>
            <HeadingWrap>
              <h4>Unlimited practice</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </HeadingWrap>
          </TextWrapper>
        </CardWrapper>
        <CardWrapper>
          <ImageWrapper>
            <img
              src={Vector3}
              alt="bg"
              type="img/png"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-block",
                width: "94px",
                height: "90px",
              }}
            />
          </ImageWrapper>
          <TextWrapper>
            <HeadingWrap>
              <h4>Instant feedback</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </HeadingWrap>
          </TextWrapper>
        </CardWrapper>
        <CardWrapper>
          <ImageWrapper>
            <img
              src={Vector1}
              alt="bg"
              type="img/png"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-block",
                width: "90px",
                height: "90px",
              }}
            />
          </ImageWrapper>
          <TextWrapper>
            <HeadingWrap>
              <h4>Fine-tune controls</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </HeadingWrap>
          </TextWrapper>
        </CardWrapper>
      </CardsWrapper>
    </CardsContainer>
  )
}

export default Cards

const CardsContainer = styled.div`
  position: relative;
  max-height: 75vh;
  padding: 70px 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: 0 auto;
  background: #fafafa;

  flex-direction: row;
  font-family: Lato, sans-serif;
`

const CardsWrapper = styled.div`
  display: flex;
  margin: 0 70px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ImageWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const TextWrapper = styled.div`
  padding: 5px 5px;
  flex-direction: column;
  text-align: center;
`
const CardWrapper = styled.div`
  padding: 20px;
  flex-direction: column;
  text-align: center;
`
const HeadingWrap = styled.div`
  h4 {
    font-size: 1.625rem;
    font-family: Georgia, serif;
    color: #303d4e;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    color: #292627;
    line-height: 1.8;
    font-size: 16px;
    letter-spacing: -0.2px;
    padding: 0 30px;
    max-width: 400px;
  }
`
