import React from "react"
import styled from "styled-components"
import Image from "../../assets/slicings/About Page/quote.png"

const Quote = () => {
  return (
    <CarouselQuote>
      <Division>
        <Qut>
          <Icon>
            <img
              style={{ width: "100%", maxWidth: "3.5rem" }}
              src={Image}
              alt="quote"
            />
          </Icon>
          <Para>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </Para>
          <Header>
            <Head>
              <Text>Name Here, Teacher</Text>
            </Head>
          </Header>
        </Qut>
      </Division>
    </CarouselQuote>
  )
}

export default Quote
const CarouselQuote = styled.div`
  margin-top: 50px;

  background-color: #303d4e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const Division = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
`
const Qut = styled.div`
  width: 100%;
  min-height: 60%;
  padding: 80px 50px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: #303d4e;
`
const Icon = styled.div`
  margin-top: 1rem;
`
const Para = styled.p`
  padding-top: 2.2rem;
  padding-bottom: 0.4rem;
  font-family: Lato, serif;
  font-size: 1.65rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`
const Header = styled.div`
  align-items: center;
  --rmd-icon-text-spacing: 1rem;
  display: flex;
  padding: 1.5rem 1rem 1rem;
`

const Head = styled.span`
  flex-grow: 1;
  min-width: 0;
`
const Text = styled.h5`
  font-size: 1.25rem;
  font-weight: 300;
  color: #fff;
  font-family: inherit;
  text-transform: uppercase;
`
