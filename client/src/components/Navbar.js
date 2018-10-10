import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
.nav-wrapper {
  background-color: #6497b1;
}
.col {
    padding-left: 5vw;
}
`

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <nav>
          <div class="nav-wrapper">
            <div class="col s12">
              <a href="/" class="breadcrumb">Home</a>
              <a href="/users" class="breadcrumb">Users</a>
              <a href="/pioneers" class="breadcrumb">Pioneers</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/timeline">Timeline</a></li>
                <li><a href="/">Lorem</a></li>
                <li><a href="/">Ipsum</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </StyledNavbar>
    )
  }
}


export default Navbar