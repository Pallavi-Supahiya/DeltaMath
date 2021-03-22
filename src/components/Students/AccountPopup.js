import React from "react"

import styled from "styled-components"

const AccountPopup = ({ openAccountModal }) => {
  const onCloseAccountModal = () => {
    openAccountModal(false)
  }
  return (
    <ModalContainer>
      <Modal>
        <Header>
          <h5>Create Student Account</h5>
        </Header>
        <FormContainer>
          <Row>
            <Column>
              <InputField>
                <Input
                  placeholder="Teacher Code or Access Code"
                  type="text"
                  value=""
                />
              </InputField>
            </Column>
          </Row>
          <Row>
            <p>
              A teacher code is provided by your teacher and gives you free
              access to their assignments. An access<br></br>code gives you full
              access to the entire library of DeltaMath content and
              instructional videos{" "}
              <a href="/#">
                (learn<br></br> more)
              </a>
              .
            </p>
            <span></span>
          </Row>
          <Row>
            <button onClick={onCloseAccountModal}>Cancel</button>
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
  min-width: 58vw;
  min-height: 55vh;
  top: 21%;
  background: #fff;
  position: absolute;
  padding: 30px 30px;
  overflow-y: auto;
`
const Header = styled.div`
  padding: 1rem;
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
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  font-family: Lato;
  button {
    padding: 10px 25px;
    max-width: 350px;
    min-height: 60px;
    margin-top: 20px;
    text-transform: none;

    font-size: 1.2rem;
    border-radius: 3px;
    letter-spacing: inherit;
    color: #2d2d2d;
    background-color: transparent;
    border: 1px solid #999999;

    &:hover {
      color: #fff;
      background-color: #303d4e;
    }
  }

  p {
    a {
      text-decoration: none;
      color: #2d2d2d;
      border-bottom: 1px solid #2d2d2d;
      transition: color 0.2s ease-in;
    }
  }
`
const Label = styled.div`
  font-size: 1.1rem;
`
const Column = styled.div`
  width: calc(50% - 10px);
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
