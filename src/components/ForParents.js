import React from "react"

import styled from "styled-components"

import laptopcopy from "../assets/slicings/laptopcopy.png"
import calloutcopy from "../assets/slicings/calloutcopy.png"
import { Button } from "./Button"

const ForParents = () => {
  return (
    <ParentsContainer>
      <ParentData>
        <ParentImage>
          <img
            src={laptopcopy}
            alt="laptop"
            style={{
              width: "100%",
              boxShadow: "-12px 0 6px -4px rgb(0 0 0 / 15%)",
            }}
          />
          <img
            src={calloutcopy}
            alt="callout"
            style={{
              height: "60%",
              width: "auto",
              position: "absolute",
              top: "16%",
              right: "-11%",
              transform: "translateX(-50%)",
              transform: "translateY(-50 %)",
            }}
          />
        </ParentImage>
        <ParentText>
          <h3>For Parents</h3>
          <p>
            Our Courses option allows parents to engage in learning with their
            children/students. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam. Loren ipsum
          </p>
          <button>
            <span>Learn More</span>
          </button>
        </ParentText>
      </ParentData>
    </ParentsContainer>
  )
}

export default ForParents

const ParentsContainer = styled.div`
  background-color: #fafafa;
  min-height: 550px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`

const ParentData = styled.div`
  width: 100%;
  max-width: 94vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const ParentImage = styled.div`
  width: 45%;
  margin: 4% 0;
  position: relative;
`
const ParentText = styled.div`
  width: 45%;
  min-height: 450px;
  max-width: 600px;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h3 {
    margin: 0 0 5% 0;
    color: #303d4e;
    font-size: 2.625rem;
    font-family: Georgia, serif;
    color: #303d4e;
    font-weight: 500;
  }

  p {
    font-family: Lato, sans-serif;
    letter-spacing: -0.2px;
    font-weight: 400;
    line-height: 1.8;
    color: #292627;
    margin: 5% 0;
  }
  button {
    text-transform: none;
    margin-top: 20px;
    font-family: Lato;
    font-weight: 600;
    font-size: 1.25rem;
    padding: 10px 85px;
    min-height: 70px;
    border-radius: 4px;
    background-color: #303d4e;
    color: #fff;
    border: none;
  }

  span {
    letter-spacing: 1.5px;
  }
`
