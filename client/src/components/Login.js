import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

///////////////////////////////////////////////////////////

const StyledLogin = styled.div`
.loginContainer {
    padding-left: 5vw;
}
h1 {
    font-size: 35px;
}
`

const StyledLink = styled(Link)`
text-decoration: none;
color: rgb(10,10,10);
`

///////////////////////////////////////////////////////////

export default class Login extends Component {
    state = {
        users: [],
        newUser: {
            userName: ''
        }
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }

    handleChange = (event) => {
        const newUser = {...this.state.newUser}
        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/users', this.state.newUser)
        const users = [...this.state.users]
        users.push(response.data)
        this.setState({ users })
    }

///////////////////////////////////////////////////////////

    render() {
        const usersList = this.state.users.map((user, i) => {
            return (<div key={i}>
            <StyledLink to={`/users/${user._id}`} >Name: {user.userName}</StyledLink>
            </div>)
        })

        return (
            <StyledLogin>
                <Navbar />
                <h1>Join Our Community</h1>
                <form onSubmit={this.handleSubmit} >
                    <input 
                    type='text'
                    name='userName'
                    placeholder='y o u r   n a m e   h e r e'
                    value={this.state.newUser.userName}
                    onChange={this.handleChange}
                    />
                    <input 
                    type='text'
                    name='emailAddy'
                    placeholder='y o u r   e m a i l   h e r e'
                    value={this.state.newUser.userName}
                    onChange={this.handleChange}
                    />
                    <input 
                    type='text'
                    name='passWord'
                    placeholder='y o u r   p a s s w o r d   h e r e'
                    value={this.state.newUser.userName}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="submit" 
                    value="Create New User" 
                    />
                </form>
            </StyledLogin>
        )
    }
}