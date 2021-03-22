import React from "react"
import styled from "styled-components"

import laptop from "../assets/slicings/laptop.png"
import callout from "../assets/slicings/callout.png"
import { Button } from "./Button"

const ForTeachers = () => {
  return (
    <TeachersContainer>
      <Teacherdata>
        <TeacherText>
          <h3>For Teachers</h3>
          <p>
            Use DeltaMath's modules to create high-leverage assignments and
            track student learning. With DeltaMath PLUS, students also get
            access to help videos. Create and assign tests, assign specific
            problem-types, even create your own problem.
          </p>
          <button>
            <span>Learn More</span>
          </button>
        </TeacherText>
        <TeacherImage>
          <img
            src={callout}
            alt="callout"
            style={{
              height: "60%",
              width: "auto",
              position: "absolute",
              top: "44%",
              left: "-10%",
              transform: "translateX(-50 %)",
              transform: "translateY(-50%)",
            }}
          />
          <img
            className="images"
            src={laptop}
            alt="laptop"
            style={{
              width: "100%",
              boxShadow: "12px 0 6px -4px rgb(0 0 0 / 15%)",
            }}
          />
        </TeacherImage>
      </Teacherdata>
    </TeachersContainer>
  )
}

export default ForTeachers

const TeachersContainer = styled.div`
  background-color: #f0eeef;
  min-height: 450px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`
const Teacherdata = styled.div`
  width: 100%;
  max-width: 94vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const TeacherText = styled.div`
  min-height: 450px;
  width: 50%;
  max-width: 700px;
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
    letter-spacing: -0.2px;
  }
  span {
    letter-spacing: 1.5px;
  }
`

const TeacherImage = styled.div`
  width: 45%;
  margin: 4% 0;
  position: relative;
`
