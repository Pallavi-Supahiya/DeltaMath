import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import Secure from "../../assets/slicings/Families and Individuals Page/secure2.png"

const FormSection = () => {
  return (
    <FormContainer>
      <ContactsForm>
        <ContactContainer>
          <Heading>Get Started Today</Heading>
          <ContactForm>
            <Label>Personal Information</Label>
            <Row>
              <Column>
                <Col>
                  <InputField placeholder="Name" name="payeename" type="text" />
                </Col>
                <Col>
                  <InputField
                    placeholder="Email Address"
                    name="emailaddress"
                    type="email"
                  />
                </Col>
              </Column>
              <Column>
                <Col>
                  <InputField
                    placeholder="Name of students/children"
                    name="studentnamefield"
                    type="text"
                  />
                </Col>
                <Col>
                  <InputField
                    placeholder="Zipcode"
                    name="zipcode"
                    type="text"
                  />
                </Col>
              </Column>
            </Row>
            <Label>Payment Information</Label>
            <Row>
              <Column1>
                <Col>
                  <InputField
                    placeholder="Card Number"
                    name="cardnumber"
                    type="text"
                  />
                </Col>
              </Column1>
              <Column>
                <Row>
                  <Column>
                    <Col>
                      <InputField
                        placeholder="Exp. Date (XX/XX)"
                        name="expirydate"
                        type="text"
                      />
                    </Col>
                  </Column>
                  <Column1>
                    <Row>
                      <Col>
                        <InputField
                          placeholder="Security Code"
                          name="securitycode"
                          type="text"
                        />
                      </Col>
                    </Row>
                  </Column1>
                </Row>
              </Column>
            </Row>
            <TextWarning>
              By clicking 'Join DeltaMath', Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam faucibus augue vitae sollicitudin
              rutrum. Phasellus pharetra aliquam sem at lacinia. Donec nec justo
              tellus. Praesent nisi augue, mattis at libero eget, commodo
              euismod erat. Nunc consequat, mi eu posuere consectetur, magna
              libero vestibulum arcu, dignissim lacinia felis massa id quam.
              Praesent justo nisi, consectetur vitae rutrum et magna libero
              vestibulum arcu, dignissim lacinia felis massa id quam. Praesent
              justo nisi, consectetur vitae rutrum et.
            </TextWarning>
            <Submission>
              <img src={Secure} alt="secure" style={{ maxWidth: "120px" }} />
              <Button
                primary="true"
                big="true"
                style={{
                  position: "relative",
                  top: "-10px",
                  marginLeft: "25px",

                  minHeight: "50px",
                  fontSize: "1.2rem",
                  minWidth: "320px",
                  letterSpacing: "-.01px",
                }}
                to="/signup"
              >
                Join Delta Math
              </Button>
            </Submission>
          </ContactForm>
        </ContactContainer>
      </ContactsForm>
    </FormContainer>
  )
}

export default FormSection
const FormContainer = styled.div`
  position: relative;

  background-color: #f3f1f2;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
`
const ContactsForm = styled.div`
  text-align: center;

  padding: 90px 0px;
`
const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Heading = styled.h2`
  font-size: 2rem;
  font-family: Georgia, serif;
  color: #303d4e;
  font-weight: 500;
`
const ContactForm = styled.div`
  margin-top: 40px;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`
const Label = styled.p`
  font-size: 1.05rem;
  padding-bottom: 10px;
`
const Row = styled.div`
  justify-content: space-between;
  display: flex;
`
const Column = styled.div`
  width: calc(50% - 10px);
`
const Col = styled.div`
  background-color: #fff;
  color: #2d2d2d;
  min-height: 60px;
  margin-bottom: 20px;
  border-color: #bdbdbd;
  border: 2px solid #bdbdbd;
`
const InputField = styled.input`
  -webkit-font-smoothing: antialiased;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03571em;
  text-decoration: inherit;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: transparent;
  border-width: 0;
  color: #bdbdbd;
  font-size: 1em;
  width: 100%;
  flex: 1 1 auto;
  height: 100%;
  padding: 20px 10px;
`
const Column1 = styled.div`
  width: calc(50% - 10px);
`
const TextWarning = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  line-height: 1.55;
  flex-direction: column;
  align-items: center;
`
const Submission = styled.div`
  position: relative;
  justify-content: center;
  margin-top: 40px;
  align-items: center;
  text-align: center;
`
