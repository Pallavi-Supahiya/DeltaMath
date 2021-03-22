import React from "react"
import styled from "styled-components"
import Image from "../../assets/slicings/Families and Individuals Page/Rectangle4.png"

const GettingStarted = () => {
  return (
    <StartContainer>
      <ImageContainer>
        <ImageBg>
          <img
            src={Image}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              clip: "rect(100px, 0px, 0px, 0px)",
            }}
            alt="img1"
          />
        </ImageBg>
        <TextContainer>
          <Text style={{ fontFamily: "Lato  !important" }}>
            At vero eos et accusamus et iusto odio dignissimos<br></br> ducimus
            qui blanditiis praesentium voluptatum deleniti<br></br> atque
            corrupti quos.
            <span
              style={{
                whiteSpace: "nowrap",
                borderBottom: "3px solid #f9a725",
              }}
            >
              Dolores et quas molestias.
            </span>
          </Text>
        </TextContainer>
      </ImageContainer>
    </StartContainer>
  )
}

export default GettingStarted
const StartContainer = styled.div`
  position: relative;

  height: 100%;
`
const ImageContainer = styled.div`
position: relative;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%
height: 100%
overflow: hidden;
`
const ImageBg = styled.div`
position: relative;
  width: 100%
  height: 100%
  -o-object-fit: cover;
  object-fit: cover;
  


`
const TextContainer = styled.div`
  position: absolute;
  top: 60px;
  padding: 0px 170px;
  max-height: 100%;
  color: #fff;
  justify-content: center;
  font-family: Lato !important;
  text-align: center;
  margin-top: 90px;
`
const Text = styled.div`
  font-size: 2rem;

  text-align: center;
  font-weight: 500;
  margin-left: 130px;
  margin-right: 50px;
  line-height: 1.4;
  max-width: 800px;
`
