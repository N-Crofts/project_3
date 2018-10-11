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

//////////////// H A N D L E   D E L E T E //////////////

    handleDelete = async (pioneerId) => {
        console.log('initiating delete')
        const response = await axios.delete(`/api/pioneers/${pioneerId}`)
        this.setState({ pioneers: response.data })
      }

/////////////////////////////////////////////////////////

    render() {
        const pioneersList = this.state.pioneers.map((pioneer, i) => {
            return (<div key={i}>
            <StyledLink to={`/pioneers/${pioneer._id}`} >{pioneer.pioneerName}</StyledLink>


                <button onClick={() => this.handleDelete(this.state.pioneers._id)}>delete</button>

            
            </div>)
        })

    return (
      <div>
         {pioneersList}
         <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          name='pioneerName'
          placeholder='e n t e r   n a m e   h e r e'
          value={this.state.newPioneer.pioneerName}
          onChange={this.handleChange}
          />
          <input type='submit' value='Create New Pioneer'/>
        </form>
      </div>
    )
  }
}


