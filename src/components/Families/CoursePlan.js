import React from "react"
import styled from "styled-components"
import { Button } from "../Button"

const CoursePlan = () => {
  return (
    <div>
      <CoursePlanContainer>
        <CourseData>
          <Column1>
            <Header>
              <h2 style={{ color: "#e1f4ff" }}>
                DeltaMath Family / Individual
              </h2>
            </Header>
            <Info>
              <TitleContainer>
                <Heading>$7.95 / month</Heading>
                <i>per student</i>
              </TitleContainer>
              <InfoList>
                <ItemList>Unlimited student practice</ItemList>
                <ItemList>Instructional videos for every problem type</ItemList>
                <ItemList>
                  Premade courses and "bursts", aligned to <br></br>Common Core
                </ItemList>
                <ItemList>Auto grading</ItemList>
                <ItemList>
                  Detailed student data, including time-stamps
                </ItemList>
                <ItemList>Evidence of student progress / learning</ItemList>
                <button to="/signup">Sign Up</button>
              </InfoList>
            </Info>
          </Column1>
          <Column2>
            <Texts>
              We offer access to fully structured, year-long courses covering
              the full gamut of Common Core standards for that particular
              class/year as well as math "bursts" covering individual
              topic-areas at a cost of $7.95 / month / student.
            </Texts>
            <Lists>
              <Colm1>
                <LineHead>Available Courses Available:</LineHead>
                <List>
                  <ListItem>Algebra 1</ListItem>
                  <ListItem>Algebra 2</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                </List>
              </Colm1>
              <Colm2>
                {" "}
                <LineHead>Available Pods Include:</LineHead>
                <List>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor</ListItem>
                </List>
              </Colm2>
            </Lists>
          </Column2>
        </CourseData>
      </CoursePlanContainer>
    </div>
  )
}

export default CoursePlan
const CoursePlanContainer = styled.div`
background-color: #fafafa;
margin-top: 30px;

display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}`
const CourseData = styled.div`
  margin-bottom: 80px;

  max-width: 85%;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`
const Column1 = styled.div`
  width: 380px;
  min-height: 500px;
  margin: 0 0 15px 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
const Header = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  background-color: #4893ba;
  font-family: Lato, serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  border-radius: 4px;
  letter-spacing: -0.5px;
`
const Info = styled.div`
  width: 100%;
  min-height: 426px;
  background-color: #f5f5f5;
  box-shadow: 2px 3px 8px 3px rgb(0 0 0 / 8%), 0 2px 2px 0 rgb(0 0 0 / 9%),
    0 1px 6px 0 rgb(0 0 0 / 2%), 0 1px 6px 0 rgb(0 0 0 / 2%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const TitleContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 0.9rem;
`
const Heading = styled.p`
  font-family: Lato, serif;
  font-size: 2.1875rem;
  margin-bottom: 3px;
  color: #303d4e;
`
const InfoList = styled.div`
  text-align: center;
  padding-bottom: 35px;
  font-family: Roboto, sans-serif;
  button {
    border-radius: 3px;
    text-transform: none;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 10px 20px;
    min-width: 240px;
    min-height: 65px;
    margin-bottom: 40px;
    background-color: #303d4e;
    color: #fff;
    position: relative;
    top: 30px;
    border: none;
  }
`
const ItemList = styled.li`
  font-size: 1rem;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  padding: 6px 15px;
`
const Column2 = styled.div`
  max-width: calc(60% - 60px);
`
const Texts = styled.p`
  font-family: Lato, sans-serif;
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 5px;
  margin-bottom: 25px;
`
const Lists = styled.div`
  display: flex;
`
const Colm1 = styled.div`
  min-width: 45% !important;
`
const LineHead = styled.h5`
  font-family: Lato;
  font-size: 0.95rem;
  margin-bottom: 10px;
  font-family: Lato;
  font-size: 0.95rem;
  margin-bottom: 10px;
`
const List = styled.ul`
  padding-left: 16px;
`
const ListItem = styled.li`
  margin-bottom: 6px;
`
const Colm2 = styled.div`
  min-width: 45% !important;
`
