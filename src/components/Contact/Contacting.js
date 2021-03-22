import React from "react"
import styled from "styled-components"

const Contacting = () => {
  return (
    <ContactForm>
      <ConatinerContact>
        <Heading>Contact Us</Heading>
        <Para>
          Questions? Fill out the form below, and we'll get back to you within
          1-2 business days.
        </Para>
        <Form>
          <Row>
            <Column>
              <Head>I'm a...</Head>
              <Select aria-describedby="selecthelp ">
                <option value="0">Select</option>
                <option value="1">Teacher</option>
                <option value="2">Student</option>
              </Select>
            </Column>
            <Column>
              <Head>I'm have a question about...</Head>
              <Select aria-describedby="selecthelp ">
                <option value="0">Select</option>
                <option value="1">Question 1</option>
                <option value="2">Question 2</option>
                <option value="3">Question 3</option>
              </Select>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputField>
                <Input placeholder="Name" type="text" value="" />
              </InputField>
              <InputField>
                <Input placeholder="Email" type="email" value="" />
              </InputField>
            </Column>
            <Column>
              <TextField>
                <Text placeholder="Message..." value="" />
              </TextField>
            </Column>
          </Row>
          <Row>
            <Btns>Send Message</Btns>
          </Row>
        </Form>
      </ConatinerContact>
    </ContactForm>
  )
}

export default Contacting
const ContactForm = styled.div`
  background-color: #fafafa;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
`
const ConatinerContact = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Heading = styled.h2`
  font-size: 2.6rem;
  font-family: Georgia, serif;
  color: #303d4e;
  font-weight: 500;
`
const Para = styled.p`
  line-height: 1.6;
  font-weight: 400;
  color: #292627;
  letter-spacing: -0.2px;
  font-size: 20px;
  max-width: 500px;
  margin: 18px auto auto;
`
const Form = styled.div`
  margin-top: 40px;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`
const Row = styled.div`
  justify-content: center;
  display: flex;
`
const Column = styled.div`
  width: calc(50% - 10px);
`
const Head = styled.p`
  font-size: 1.175rem;
  padding-bottom: 10px;
`
const Select = styled.select`
  border-radius: 4px;
  width: calc(100% - 10px);
  color: #bdbdbd;
  background-color: #fff;
  font-size: 1.15rem;
  font-family: inherit;
  margin-bottom: 20px;
  border-color: #bdbdbd;
  min-height: 60px;
`
const InputField = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  min-height: 60px;
`
const Input = styled.input`
  -webkit-font-smoothing: antialiased;
  line-height: 1.5rem;

  letter-spacing: 0.03571em;
  text-decoration: inherit;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: trasparent;
  border: 1px solid;
  border-radius: 4px;
  color: #bdbdbd;
  font-size: 1em;
  width: 98%;
  flex: 1 1 auto;
  height: 100%;
  padding: 20px 10px;
`
const TextField = styled.div`
  margin-bottom: 20px;
`
const Text = styled.textarea`
  border-color: #bdbdbd;
  border-radius: 4px;
  height: 140px;
  flex: 1 1 auto;
  width: calc(100% - 10px);
  font-size: 1em;
  color: #2d2d2d;
  letter-spacing: 0.03571em;
  text-decoration: inherit;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 20px 10px;
`
const Btns = styled.button`
  background-color: #303d4e;
  color: #fff;
  border: none;
  text-transform: none;
  min-width: 440px;
  font-family: Lato;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 10px 25px;
  min-height: 65px;
  border-radius: 4px;
`
