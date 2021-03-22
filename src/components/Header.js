import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

import { Button } from "./Button"
import Logo from "../assets/slicings/Logo.png"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/" style={{ marginLeft: "60px" }}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: " 100%", minWidth: "180px" }}
        />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink></NavLink>
        <NavLink>
          <NavLinks>
            <Links to="/teachersSchools">
              <span>Teachers/Schools</span>
            </Links>
          </NavLinks>
          <NavLinks>
            <Links to="/familiesIndividuals">
              <span>Families/Individuals</span>
            </Links>
          </NavLinks>
          <NavLinks>
            <Links to="/students">
              <span>Students</span>
            </Links>
          </NavLinks>
          <NavLinks>
            <Links to="/about">
              <span>About</span>
            </Links>
          </NavLinks>
          <NavLinks>
            <Links to="/faqs">
              <span>FAQs</span>
            </Links>
          </NavLinks>
          <NavLinks style={{ borderRight: "none" }}>
            <Links to="/contact">
              <span>Contact</span>
            </Links>
          </NavLinks>
        </NavLink>

        {/* {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))} */}
        <NavLink></NavLink>
      </NavMenu>
      <NavBtn>
        <Button
          primary="true"
          style={{
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "0.7px",
          }}
          to="/signin"
        >
          Login
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: #fafafa;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
`
const NavLink = styled(Link)`
  color: #7a7a7a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #7a7a7a;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transfrom: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  flex: 4 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: Lato, sans-serif;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavLinks = styled.li`
  list-style: none;
  padding: 0 20px;
  border-right: 1px solid #d6d6d6;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
`
const Links = styled(Link)`
  color: #7a7a7a;
  transition: color 0.2s ease-in;
  text-decoration: none;
  white-space: nowrap;
  font-family: Lato;
`
