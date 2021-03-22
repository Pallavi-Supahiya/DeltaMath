import React from "react"
import styled from "styled-components"
import Bodner from "../../assets/slicings/About Page/Bodner.png"
import Katey from "../../assets/slicings/About Page/Katey.png"
import Man1 from "../../assets/slicings/About Page/Rectangle 7.png"
import Man2 from "../../assets/slicings/About Page/Rectangle 71.png"

const Leadership = () => {
  return (
    <LeadershipContainer>
      <Heading>Leadership Team</Heading>
      <LeadershipGrid>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Man1} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Zach Korzyl</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Man2} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Ben Peled</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here</Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Bodner} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Name Bodner</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Katey} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Katey Philips</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Man1} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Zach Korzyl</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Man2} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Ben Peled</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Bodner} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Name Bodner</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
        <div>
          <TeamCard>
            <CardData>
              <Media>
                <img src={Katey} alt="man1" />
              </Media>
              <Text>
                <Top>
                  <Title>Katey Philips</Title>{" "}
                  <Subtitle style={{ color: "black" }}>Title Here </Subtitle>
                </Top>
              </Text>
            </CardData>
          </TeamCard>
        </div>
      </LeadershipGrid>
    </LeadershipContainer>
  )
}

export default Leadership
const LeadershipContainer = styled.div`
  background-color: #fafafa;
  position: relative;
  top: -133px;
  margin-bottom: -180px;
  padding-bottom: 80px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`
const Heading = styled.h1`
  margin-bottom: 50px;
  font-size: 2.625rem;
  font-family: Georgia, serif;
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: #303d4e;
`
const LeadershipGrid = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`
const TeamCard = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CardData = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Media = styled.div`
  width: auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Text = styled.div`
  background: #fff;
  text-align: center;
  width: 230px;
  padding: 1.5rem 1rem 1rem;
  color: #303d4e;

  &:hover {
    background: #303d4e;
    color: #fff;
  }
`
const Top = styled.span`
  flex-grow: 1;
  min-width: 0;
  font-family: Georgia, serif;
`
const Title = styled.h5`
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: normal;
  text-decoration: inherit;
  text-transform: inherit;
  margin-bottom: 0;
  margin-top: 0;
`
const Subtitle = styled.h6`
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.00714em;
  text-decoration: inherit;
  text-transform: inherit;
  margin-bottom: 0;
  margin-top: 0;
`
