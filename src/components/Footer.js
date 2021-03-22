import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"
import { menuData } from "../data/MenuData"
import Logo from "../assets/slicings/dm-Logo.png"

const Footer = () => {
  return (
    <FooterContainer>
      <LinkFooter>
        <ImageWrapper>
          <img src={Logo} alt="logo" style={{ maxWidth: "300px" }} />
        </ImageWrapper>
        <Linking>
          <NavMenu>
            <NavLink></NavLink>
            <NavLink>
              <NavLinks>
                <Linkes to="/teachersSchools">
                  <span>Teachers/Schools</span>
                </Linkes>
              </NavLinks>
              <NavLinks>
                <Linkes to="/familiesIndividuals">
                  <span>Families/Individuals</span>
                </Linkes>
              </NavLinks>
              <NavLinks>
                <Linkes to="/students">
                  <span>Students</span>
                </Linkes>
              </NavLinks>
              <NavLinks>
                <Linkes to="/about">
                  <span>About</span>
                </Linkes>
              </NavLinks>
              <NavLinks>
                <Linkes to="/faqs">
                  <span>Faqs</span>
                </Linkes>
              </NavLinks>
              <NavLinks>
                <Linkes to="/contact">
                  <span>Contact</span>
                </Linkes>
              </NavLinks>
            </NavLink>

            {/* {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))} */}
            <NavLink></NavLink>
          </NavMenu>
        </Linking>
      </LinkFooter>
      <FooterText>
        <FooterCopyright>
          <Text>
            <span>© 2021 DeltaMath</span>
          </Text>
          <Links>
            <Link
              to="/#"
              style={{
                margin: "0 8px",
                color: "#494949",
                textDecoration: "none",
                opacity: "1",
                transition: "all 0.2s ease-in",
                borderBottom: "2px solid hsla(0, 0%, 42%, 0.5)",
              }}
            >
              Terms of Use
            </Link>
            <Link
              to="/#"
              style={{
                margin: "0 8px",
                color: "#494949",
                textDecoration: "none",
                opacity: "1",
                transition: "all 0.2s ease-in",
                borderBottom: "2px solid hsla(0, 0%, 42%, 0.5)",
              }}
            >
              Privacy Policy
            </Link>
          </Links>
        </FooterCopyright>
        <FooterSocial>
          <Facebook />

          <Twitter />
        </FooterSocial>
      </FooterText>
    </FooterContainer>
  )
}
export default Footer

const FooterContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;

  margin: 0 auto;
`
const LinkFooter = styled.div``
const ImageWrapper = styled.div`
  padding: 20px 0px;
  text-align: center;
`
const Linking = styled.div``
const NavMenu = styled.div``
const NavLink = styled(Link)`
  color: #757575;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Lato;
`
const FooterText = styled.div`
  width: 80%;
  font-weight: 500;
  margin: 40px 0;
  padding-top: 27px;
  border-top: 1px solid hsla(0, 0%, 42%, 0.5);
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const Links = styled(Link)``
const FooterCopyright = styled.div`
  font-family: Lato, sans-serif;
  width: 92%;
  font-size: 1rem;
  margin: 5px 0;
`
const FooterSocial = styled.div`
  font-size: 28px;
  width: 80px;
  color: #313d4e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
const Facebook = styled(FaFacebookF)`
  font-size: 28px;
  color: inherit;
`
const Twitter = styled(FaTwitter)`
  font-size: 28px;
  color: inherit;
`
const Text = styled.span`
  margin: 0 10px;
  color: #494949;
`
const NavLinks = styled.li`
  list-style: none;
  padding: 0 20px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
`
const Linkes = styled(Link)`
  color: #7a7a7a;
  transition: color 0.2s ease-in;
  text-decoration: none;
  white-space: nowrap;
`
