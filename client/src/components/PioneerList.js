import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import swal from 'sweetalert';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    &:hover {
    color: cyan;
    text-decoration: none;
  }
`

const StyledButton = styled.button`
    position: absolute;
    left: 85%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    margin: 5px;
    font-size: 8px;
    color: #b1b7bc;
    padding: 0.75em;
    &:hover {
    color: red;
    border-color: red;
  }
`

const StyledSubmit = styled.input`
    position: relative;
    left: 34%;
    background-color: rgba(228, 241, 254, 0.1);
    border-radius: 10px;
    margin: 5px;
    font-size: 12px;
    color: #b1b7bc;
    padding: 0.75em;
    &:hover {
    color: cyan;
    border-color: cyan;
  }
`

export default class PioneerList extends Component {
    state = {
        pioneers: [],
        newPioneer: {
            pioneerName: ''
        }
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/pioneers')
        this.setState({ pioneers: response.data })
    }

    handleChange = (event) => {
        const newPioneer = { ...this.state.newPioneer }
        newPioneer[event.target.name] = event.target.value
        this.setState({ newPioneer })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/pioneers', this.state.newPioneer)
        const pioneers = [...this.state.pioneers]
        pioneers.push(response.data)
        this.setState({ pioneers })
    }

    handleDelete = async (pioneerId) => {
        swal({
            title: "Delete?",
            text: "Are you sure you want to delete this Pioneer of High Strangeness?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Delete Complete!", {
                        icon: "success"
                    })
                        .then(async () => {
                            const deleteResponse = await axios.delete(`/api/pioneers/${pioneerId}`)
                            const filteredPioneers = this.state.pioneers.filter(pioneer => pioneerId !== pioneer._id)
                            this.setState({ pioneers: filteredPioneers })
                        })
                } else {
                    swal("Delete Canceled!");
                }
            })
    }

    render() {
        const pioneersList = this.state.pioneers.map((pioneer, i) => {
            return (
                <div key={i}>
                    <StyledLink to={`/pioneers/${pioneer._id}`} > &#183; {pioneer.pioneerName}</StyledLink>
                    <StyledButton onClick={() => this.handleDelete(pioneer._id)}>X
                    </StyledButton>
                </div>
            )
        })

        return (
            <div>
                <ul>
                    {pioneersList}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input class="enterHere"
                        type='text'
                        name='pioneerName'
                        placeholder='e n t e r   n a m e   h e r e'
                        value={this.state.newPioneer.pioneerName}
                        onChange={this.handleChange}
                    />
                    <StyledSubmit type='submit' value='c r e a t e   n e w   p i o n e e r' />
                </form>
            </div>
        )
    }
}

