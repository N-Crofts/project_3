import React, { Component } from 'react'
import styled from 'styled-components'

///// STYLED VERSION OF OUR NAVBAR COMPONENT ///
///// USING INSTALLED STYLED-COMPONENTS. ///////

const StyledNavbar = styled.div`
.nav-wrapper {
  background-color: #6497b1;
}
.col {
    padding-left: 5vw;
}
`

///// NAVBAR COMPONENT DEFINED. ////////////////
///// ALSO RENDERED USING MATERIALIZED. ////////

class NavbarTwo extends Component {
  render() {
    return (
      <StyledNavbar>
        <nav>
          <div class="nav-wrapper">
            <div class="col s12">
              <a href="/" class="breadcrumb">Home</a>
              <a href="/login" class="breadcrumb">Sign Up</a>
            </div>
          </div>
        </nav>
      </StyledNavbar>
    )
  }
}


export default NavbarTwo