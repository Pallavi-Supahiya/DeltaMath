import React from "react"
import styled from "styled-components"

import Ellipse3 from "../assets/slicings/Ellipse3.png"
import Ellipse4 from "../assets/slicings/Ellipse4.png"
import Ellipse5 from "../assets/slicings/Ellipse5.png"
import quote from "../assets/slicings/quote.png"

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Description>
        Why do millions of people choose to learn on DeltaMath?{" "}
      </Description>
      <TestWrapper>
        <Card>
          <Qut>
            <img src={quote} alt="quote" />
          </Qut>
          <Quote>
            <p
              style={{
                textAlign: "center",
                color: "#8a898a",
              }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
            </p>
          </Quote>
          <span>
            <img
              src={Ellipse3}
              style={{
                display: "block",
                margin: "0px auto",
              }}
              alt="img1"
            />
          </span>

          <NameWrapper>
            <h5>Name Here</h5>

            <h6>Teacher</h6>
          </NameWrapper>
        </Card>

        <Card>
          <Qut>
            <img src={quote} alt="quote" />
          </Qut>
          <Quote>
            <p
              style={{
                textAlign: "center",
                color: "#8a898a",
              }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
            </p>
          </Quote>
          <span>
            <img
              src={Ellipse4}
              style={{
                display: "block",
                margin: "0px auto",
              }}
              alt="img1"
            />
          </span>

          <NameWrapper>
            <h5>Name Here</h5>
            <h6>Parent</h6>
          </NameWrapper>
        </Card>

        <Card>
          <Qut>
            <img src={quote} alt="quote" />
          </Qut>
          <Quote>
            <p
              style={{
                textAlign: "center",
                color: "#8a898a",
              }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
            </p>
          </Quote>
          <span>
            <img
              src={Ellipse5}
              style={{
                display: "block",
                margin: "0px auto",
              }}
              alt="img1"
            />
          </span>
          <NameWrapper>
            <h5>Name Here</h5>
            <h6>Student</h6>
          </NameWrapper>
        </Card>
      </TestWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fafafa;
  color: #000;
  padding: 3rem 5rem 0rem;
  height: 100%;
`

const Description = styled.h4`
  width: 100%;
  font-weight: 600;
  font-family: Lato;
  font-size: 25px;
  height: 150px;
  color: #303d4e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const TestWrapper = styled.div`
  display: flex;
  padding: 0px 40px 170px;
  width: 100%;
`
const Card = styled.div`
  background: #f0eeef;

  box-shadow: 0 3px 8px 3px rgb(0 0 0 / 5%), 0 2px 2px 0 rgb(0 0 0 / 9%),
    0 1px 6px 0 rgb(0 0 0 / 2%);
  outline: none;
  width: 320px;
  height: fit-content;
  min-height: 60%;
  margin: 0 1% 3%;
  padding: 3%;
  text-align: center;
`

const NameWrapper = styled.div`
  display: block;
  align-items: center;
  padding: 1.5rem 1rem 1rem;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.7px;
  line-height: 1.5rem;
  h5 {
    font-size: 16px;
    font-weight: 600;
    color: #313d4e;
    font-family: inherit;
  }
  h6 {
    font-size: 16px;
    color: #6b6b6b;
    font-family: inherit;
    margin-top: -5px;
  }
`
const Quote = styled.div`
  font-size: 16px;
  color: #6b6b6b;
  margin: 20px 0;
  font-family: inherit;
  p {
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03571em;
    text-decoration: inherit;
    text-transform: inherit;
  }
`
const Qut = styled.div`
  img {
    margin-top: 10px;

    width: 100%;
    max-width: 30px;
  }
`
