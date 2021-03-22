import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const AccountPopup = ({ openModal }) => {
  return (
    <ModalContainer>
      <Modal>
        <Header>
          <h5>Create Teacher Account</h5>
        </Header>
        <FormContainer>
          <h2>Personal Information</h2>
          <Row>
            <Column>
              {" "}
              <Select aria-describedby="selecthelp ">
                <option value="0">Salutation</option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Ms</option>
                <option value="4">Dr</option>
                <option value="5">First Name</option>
                <option value="6">Custom</option>
              </Select>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputField>
                <Input placeholder="First Name" type="text" value="" />
              </InputField>
            </Column>
            <Column>
              <InputField>
                <Input placeholder="Last Name" type="text" value="" />
              </InputField>
            </Column>
          </Row>
          <Label>
            <label>Name Preview:</label>
            <span></span>
          </Label>
          <Row>
            <button>Create Teacher Account</button>
          </Row>
          <Row>
            <p>
              By signing up you are agreeing to the<span> </span>
              <a href="/#">Terms of services</a>
            </p>
          </Row>
        </FormContainer>
      </Modal>
    </ModalContainer>
  )
}

export default AccountPopup

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

const Modal = styled.div`
  z-index: 1;
  min-width: 60vw;
  min-height: 85vh;
  top: 8%;
  background: #fff;
  position: absolute;
  padding: 50px 30px;
  overflow-y: auto;
`
const Header = styled.div`
  h5 {
    font-family: Georgia, serif;
    font-size: 2.25rem;
    color: #303d4e;
    font-weight: 500;
    line-height: 1.1;
  }
`
const FormContainer = styled.div`
  h2 {
    font-size: 1.5rem;
    font-family: Georgia, serif;
    color: #303d4e;
    font-weight: 500;
    border-bottom: 2px solid rgba(45, 45, 45, 0.1);
    margin-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 5px;
  }
`
const Row = styled.div`
  justify-content: space-between;
  display: flex;

  button {
    margin-top: 20px !important;
    margin-right: auto;
    box-shadow: none;
    text-transform: none;
    min-width: 250px;
    background-color: #303d4e;
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 10px 25px;
    min-height: 65px;
    border-radius: 4px;
    letter-spacing: 1.5px;
  }
  p {
    margin-top: 15px;
    a {
      text-decoration: none;
      color: #2d2d2d;
      border-bottom: 1px solid #2d2d2d;
      transition: color 0.2s ease-in;
    }
  }
`
const Column = styled.div`
  width: calc(50% - 10px);
`
const Select = styled.select`
  width: calc(100% - 10px);
  color: #bdbdbd;
  background-color: #fff;
  font-size: 1.15rem;
  font-family: inherit;
  margin-bottom: 20px;
  border-color: #bdbdbd;
  min-height: 60px;
  border-radius: 4px;
  padding: 10px;
`
const InputField = styled.div`
  margin-bottom: 20px;
  color: #bdbdbd;
  min-height: 60px;
`
const Input = styled.input`
  padding: 10px;
  font-size: 1.15rem;
  font-family: inherit;
  border: 1px solid #bdbdbd;
  width: calc(100% - 10px);
  margin-bottom: 20px;
  min-height: 60px;
  border-radius: 4px;
`
const Label = styled.div`
  font-size: 1.1rem;
`
