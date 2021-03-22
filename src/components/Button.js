import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#303d4e" : "#f9a622")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "12.5px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "10px" : "none")};
  margin: 0 10px;

  &:hover {
    background: ${({ primary }) => (primary ? "#3d4753" : "#bd8a37")};
    transform: translateY(-2px);
  }
`
