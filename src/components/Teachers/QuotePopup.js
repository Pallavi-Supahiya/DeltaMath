import React from "react"
import styled from "styled-components"

const QuotePopup = ({ openQuoteModal }) => {
  return (
    <ModalContainer>
      <Modal>
        <Header>
          <h5>Get a Quote</h5>
        </Header>
        <FormContainer>
          <Row>
            <Label>
              <label>
                Select from the following <span>(only one)</span>:
              </label>
              <span></span>
            </Label>
          </Row>
          <Row>
            <Column>
              {" "}
              <Select aria-describedby="selecthelp ">
                <option value="0">License</option>
                <option value="1">District License (Grades 6-12)</option>
                <option value="2">District License (Grades 9-12)</option>
                <option value="3">District License (Grades 6-8)</option>
                <option value="4">School License</option>
              </Select>
            </Column>
          </Row>
          <Row>
            <button>Submit</button>
          </Row>
        </FormContainer>
      </Modal>
    </ModalContainer>
  )
}

export default QuotePopup

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
  min-width: 57vw;
  min-height: 75vh;
  top: 8%;
  background: #fff;
  position: absolute;
  padding: 50px 30px;
  overflow-y: auto;
`
const Header = styled.div`
  padding: 1.5rem 1rem 1rem;
  h5 {
    font-family: Georgia, serif;
    font-size: 2.25rem;
    color: #303d4e;
    font-weight: 500;
    line-height: 1.1;
  }
`
const FormContainer = styled.div`
  padding: 1rem;
`
const Row = styled.div`
  margin-bottom: 30px;
  justify-content: space-between;
  display: flex;
  font-family: Lato;
  button {
    margin-top: 20px !important;
    margin-right: auto;
    box-shadow: none;
    text-transform: none;
    min-width: 250px;
    background-color: #303d4e;
    color: #fff;

    font-weight: 600;
    font-size: 1.2rem;
    padding: 10 25px;
    min-height: 65px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    border: none;
  }
`
const Label = styled.div`
  font-size: 1.1rem;
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
const Column = styled.div`
  width: calc(100% - 10px);
`
