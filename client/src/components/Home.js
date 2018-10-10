import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const StyledHome = styled.div`

.landingTitle {
    text-align: center;
}

h1 {
    font-size: 45px;
    letter-spacing: 30px;
}
p {
    font-size: 20px;
    letter-spacing: 4px;
}
`
const StyledLink = styled(Link)`
text-decoration: none;
color: rgb(10,10,10);
`

export default class Home extends Component {
    render() {
      return (
        <StyledHome>
          <Navbar />
          <div class="landingTitle">
          <h1>POLARIS</h1>
            <p>an archive of brilliant minds, strange phenomena, and hidden history.</p>
          </div>
          <h5 class="center-align">
          <StyledLink to={`/login/`} >sign up </StyledLink>
          </h5>
        </StyledHome>
      )
    }
  }