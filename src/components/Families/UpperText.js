import React from "react"
import styled from "styled-components"

const UpperText = () => {
  return (
    <Container>
      <TextContainer>
        <p>
          DeltaMath offers learning solutions for college students,
          homeschoolers,<br></br> and families looking to give their children
          more focused practice, with<br></br> detailed feedback and the ability
          to track student-progress.
        </p>
      </TextContainer>
    </Container>
  )
}

export default UpperText

const Container = styled.div`
  width: 100%;
  position: relative;
  top: -250px;
  margin-bottom: -280px;
`
const TextContainer = styled.div`
  background-color: #fafafa;
  padding: 60px 40px;

  line-height: 1.55;
  margin: auto;
  text-align: center;
  font-size: 1.35rem;
  color: #313e4f;
`
