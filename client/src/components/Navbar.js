import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
.nav-wrapper {
  background-color: #006666;
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
              <a href="/timeline" class="breadcrumb">Timeline</a>
              <a href="/users" class="breadcrumb">Users</a>
            </div>
          </div>
        </nav>
      </StyledNavbar>
    )
  }
}

export default Navbar







