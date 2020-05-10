import React from "react";

import Search from "./Search";

import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0.5rem 3rem;
  background: #06080a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  h1 {
    font-size: 1.2rem;
    color: white;
  }
`;

const Navbar = () => (
  <Nav>
    {/* <h1 className="nav-brand">
            FindaWall
        </h1> */}
    <Search />
  </Nav>
);

export default Navbar;
