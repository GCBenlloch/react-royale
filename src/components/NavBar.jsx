import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'react-grid-system';

const StyledNavBar = styled.div`
  background: #1e5799;
  background: -moz-linear-gradient(-45deg, #1e5799 0%, #58a4df 100%);
  background: -webkit-linear-gradient(-45deg, #1e5799 0%,#58a4df 100%);
  background: linear-gradient(135deg, #1e5799 0%,#58a4df 100%);
  padding: 20px 0;
`;

const Brand = styled(Link)`
  margin: 0;
  font-family: 'Sigmar One', cursive;
  font-size: 20px;
  color: white;
  text-decoration: none;
`;

class NavBar extends Component {
  render() {
    return(
      <StyledNavBar>
        <Container>
          <Brand to="/">React Royale</Brand>
        </Container>
      </StyledNavBar>
    );
  }
}

export default NavBar;
