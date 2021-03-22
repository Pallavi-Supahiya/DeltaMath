import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import Image from "../../assets/slicings/About Page/Rectangle 8.png"

const Contactus = () => {
  return (
    <About>
      <AboutImage>
        <ImageEdit>
          <img src={Image} alt="contact us" />
        </ImageEdit>
      </AboutImage>
      <AboutInfo>
        <Texts>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </Texts>
        <Texts>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non
        </Texts>
        <Btns>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "2px solid black",
              fontSize: "0.8rem",
              fontWeight: "550",
              marginTop: "20px",
              borderRadius: "4px",
              letterSpacing: "-1px",
              padding: "8px 40px",
              fontFamily: "inherit",
              color: "inherit",
            }}
            to="/contact"
          >
            Contact Us
          </Button>
        </Btns>
      </AboutInfo>
    </About>
  )
}

export default Contactus

const About = styled.div`
  background-color: #fafafa;
  padding: 60px 150px 80px;
  width: 100%;
  position: relative;
  top: -83px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`
const AboutImage = styled.div`
  width: 50%;
`
const ImageEdit = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 482px;
  height: 316px;
`
const AboutInfo = styled.div`
  width: 50%;
  padding: 20px 20px 20px 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
const Texts = styled.p`
  padding-bottom: 10px;
  letter-spacing: -0.2px;
  font-weight: 400;
  line-height: 1.6;
  color: #292627;
`
const Btns = styled.div`
  margintop: 30px;
`
