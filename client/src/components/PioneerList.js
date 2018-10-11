import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
text-decoration: none;
color: #fff;
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
        const newPioneer = {...this.state.newPioneer}
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


    render() {
        const pioneersList = this.state.pioneers.map((pioneer, i) => {
            return (<div key={i}>
            <StyledLink to={`/pioneers/${pioneer._id}`} >{pioneer.pioneerName}</StyledLink>
            </div>)
        })

    return (
      <div>
         {pioneersList}
      </div>
    )
  }
}
