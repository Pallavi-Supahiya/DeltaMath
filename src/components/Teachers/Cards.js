import React from "react"
import styled from "styled-components"

const Cards = () => {
  return (
    <CardsContainer>
      <CardsAll>
        <CardsHeading>
          DeltaMath offers both free DeltaMath Teacher accounts and DeltaMath
          Plus accounts.
        </CardsHeading>
        <CardContainer>
          <CardAll>
            <CardHead style={{ backgroundColor: "#303d4e" }}>
              <h2 style={{ color: "#fff" }}>DeltaMath Teacher</h2>
            </CardHead>
            <CardInfo>
              <CardTitle>
                <TitleH2>FREE</TitleH2>
              </CardTitle>
              <CardList>
                <ListItems>
                  <ListItem>Unlimited students</ListItem>
                  <ListItem>Unlimited assignments</ListItem>
                  <ListItem>Unlimited student practice</ListItem>
                  <ListItem>
                    1500+ premade problem types,<br></br>
                    aligned to Common Core
                  </ListItem>
                  <ListItem>Auto grading</ListItem>
                  <ListItem>
                    Detailed student data, including<br></br> time-stamps
                  </ListItem>
                  <ListItem>Evidence of student progress/learning</ListItem>
                  <ListItem>Cheat prevention tools</ListItem>
                  <ListItem>Copy and share assignments</ListItem>
                </ListItems>
              </CardList>
            </CardInfo>
          </CardAll>
          <CardAll>
            <CardHead style={{ backgroundColor: "#f9af38" }}>
              <h2 style={{ color: "#fff" }}>DeltaMath Plus</h2>
            </CardHead>
            <CardInfo>
              <CardTitle>
                <TitleH2 style={{ fontFamily: " Lato,serif" }}>
                  $75 / teacher
                </TitleH2>
                <i style={{ color: "#303d4e" }}>through October 2021</i>
              </CardTitle>
              <CardList>
                <ListItems>
                  <ListItem>
                    All the features of DeltaMath Teacher,<br></br>
                    <strong>PLUS:</strong>{" "}
                  </ListItem>
                  <ListItem>
                    Instructional videos for every<br></br>
                    problem type
                  </ListItem>
                  <ListItem>Assign videos from Youtube</ListItem>
                  <ListItem>Create a test</ListItem>
                  <ListItem>Selection of problem sub-types</ListItem>
                  <ListItem>Assign specific problems</ListItem>
                  <ListItem>Assign to individuals or groups</ListItem>
                  <ListItem>Create your own problem</ListItem>
                </ListItems>
              </CardList>
            </CardInfo>
          </CardAll>
          <CardAll>
            <CardHead style={{ backgroundColor: "#4893ba" }}>
              <h2 style={{ color: "#fff" }}>DeltaMath XXXX</h2>
            </CardHead>
            <CardInfo>
              <CardTitle>
                <TitleH2 style={{ fontFamily: " Lato,serif" }}>
                  $XX / teacher
                </TitleH2>
                <i style={{ color: "#303d4e" }}>through October 2021</i>
              </CardTitle>
              <CardList>
                <ListItems>
                  <ListItem>
                    All the features of DeltaMath Teacher,<br></br>
                    <strong>PLUS:</strong>
                  </ListItem>
                  <ListItem>
                    Instructional videos for every<br></br>
                    problem type
                  </ListItem>
                  <ListItem>Assign videos from Youtube</ListItem>
                  <ListItem>Create a test</ListItem>
                  <ListItem>Selection of problem sub-types</ListItem>
                  <ListItem>Assign specific problems</ListItem>
                  <ListItem>Assign to individuals or groups</ListItem>
                  <ListItem>Create your own problem</ListItem>
                </ListItems>
              </CardList>
            </CardInfo>
          </CardAll>
        </CardContainer>
      </CardsAll>
    </CardsContainer>
  )
}
export default Cards

const CardsContainer = styled.div`
  padding-top: 70px;
`
const CardsAll = styled.div`
  padding-top: 70px;
  padding-bottom: 80px;
`
const CardsHeading = styled.div`
  margin: 0 auto 50px;
  font-size: 1.65rem;
  font-family: Georgia, serif;
  font-weight: 500;
  color: #303d4e;
  text-align: center;
  max-width: 650px;
  line-height: 1.4;
  padding: 0 20px;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`
const CardAll = styled.div`
  width: 320px;
  min-height: 500px;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  div {
    midth: 320px;
  }
`
const CardHead = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
`
const CardInfo = styled.div`
  width: 320px;
  min-height: 426px;
  background-color: #f5f5f5;
  box-shadow: 2px 3px 8px 3px rgb(0 0 0 / 8%), 0 2px 2px 0 rgb(0 0 0 / 9%),
    0 1px 6px 0 rgb(0 0 0 / 2%), 0 1px 6px 0 rgb(0 0 0 / 2%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
const CardTitle = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 0.9rem;
`
const TitleH2 = styled.div`
  font-family: Lato, serif;
  font-size: 2.1875rem;
  margin-bottom: 3px;
  color: #303d4e;
`
const CardList = styled.div`
  text-align: center;
  padding-bottom: 35px;
`
const ListItems = styled.div`
  list-style: none;
  padding: 6px 15px;
  font-size: 0.9rem;
`
const ListItem = styled.li`
  list-style: none;
  padding: 6px 15px;
  font-size: 0.9rem;
`
