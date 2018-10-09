import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavbarThree from './NavbarThree'

const StyledLink = styled(Link)`
text-decoration: none;
color: rgb(10,10,10);
`

export default class Users extends Component {
    state = {
        users: []
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }

    render() {
        const usersList = this.state.users.map((user, i) => {
            return (<div key={i}>
            <StyledLink to={`/users/${user._id}`} > - {user.userName}</StyledLink>
            </div>)
        })
    return (
      <div>
         <NavbarThree/>
         {usersList}
      </div>
    )
  }
}
