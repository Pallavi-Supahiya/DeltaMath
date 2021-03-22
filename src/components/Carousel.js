import React from "react"
import styled from "styled-components"
import Laptop from "../assets/slicings/Teachers Page/macbook.png"

const Carousel = () => {
  return (
    <div>
      <CarouselContainer>
        <LaptopCarousel>
          <LaptopImage>
            <img src={Laptop} alt="macbook" />
          </LaptopImage>
        </LaptopCarousel>
      </CarouselContainer>
    </div>
  )
}

export default Carousel
const CarouselContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  position: relative;
`
const LaptopCarousel = styled.div`
  position: relative;
  display: block;
`
const LaptopImage = styled.div`
justify-content: center;
position: absolute;
    height: 98%;
    width: 736px;
    top: 50%;
    z-index: -1;
    left: 50%;
    transform: scale(.72) translate(-69.26%,-72%);
}

`
