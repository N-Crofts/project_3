import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from './Navbar'

////////////////////  S T Y L I N G  ////////////////////////

const StyledPage = styled.div`
h1{
  text-align: center;
  margin: 20px 0 100px 0;
}
button {
  background: rgb(30, 30, 120);
  padding: 10px;
  color: rgb(250,250,250);
  font-size: 20px;
  border: none;
  margin: 15px;
}
#interactions {
}
#save-message {
  padding: 15px;
  color: rgb(250,250,250);
  transition: color ease 1s;
  &:hover{
    color: rgb(0,0,0);
    transition: color ease 1s, background-color ease 1s;
    background-color: rgb(150, 250, 150)
  }
}
`

const StyledPhenomenonContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
max-width: 600px;
`

const StyledPhenomenon = styled.div`
background-color: rgb(250,250,190);
width: 30vw;
min-width: 100px;
max-width: 150px;
margin: 15px;
padding: 10px;
height: 150px;
box-shadow: 6px 6px 6px rgb(230,230,230);
div {
  font-size: 14px;
}
&:hover {
  #phenomenon-title > span {
    display: inline;
  }
}
#phenomenon-title {
  font-weight: 700;
  margin: 0 0 10px 0;
  span {
    float: right;
    display: none;
  }
}
`

///////////////////////////////////////////////////////////

export default class PioneerBoard extends Component {
  state = {
    pioneer: {},
    phenomena: [
    ]
  }

///////////////////////////////////////////////////////////

  getPioneer = async () => {
    const pioneerId = this.props.match.params.pioneerId
    const response = await axios.get(`/api/pioneers/${pioneerId}`)
    this.setState({
      pioneer: response.data,
      phenomena: response.data.phenomena.reverse()
    })
  }

  handleNew = async () => {
    const pioneerId = this.props.match.params.pioneerId
    const newPhenomenon = await axios.post(`/api/pioneers/${pioneerId}/phenomena`)
    await this.getPioneer()
  }

  handleDelete = async (phenomenonId) => {
    await axios.delete(`/api/pioneers/${this.state.pioneer._id}/phenomena/${phenomenonId}`)
    await this.getPioneer()
  }

  componentDidMount = () => {
    this.getPioneer()
  }

  handleChange = (event, i) => {
    const phenomena = [...this.state.phenomena]
    phenomena[i][event.target.name] = event.target.value
    this.setState({ phenomena })
  }

  updatePhenomenon = async (i) => {
    const updatedPhenomenon = this.state.phenomena[i]
    await axios.put(`/api/pioneers/${this.props.match.params.pioneerId}/phenomena/${updatedPhenomenon._id}`, updatedPhenomenon)
  }

///////////////////////////////////////////////////////////

  render() {

    const phenomenaList = this.state.phenomena.map((phenomenon, i) => {
      return <StyledPhenomenon key={i}>
        
        <input type='text' id="phenomenon-title" name='title' value={phenomenon.title} 
        onChange={(event) => this.handleChange(event, i)} 
        onBlur={() => this.updatePhenomenon(i)} />
        
        <span onClick={() => this.handleDelete(phenomenon._id)} >x</span>
        
        <input type='text' name='description' value={phenomenon.description} 
        onChange={(event) => this.handleChange(event, i)} 
        onBlur={() => this.updatePhenomenon(i)}  />

      </StyledPhenomenon>
    })

    return (
      <div>
      <Navbar />
      <StyledPage>
        <h1>The Strange Case Of ... {this.state.pioneer.pioneerName}</h1>
        <div id="interactions">
          <button onClick={this.handleNew}>New Phenomenon</button>
          <span>Sort phenomena by: <button>??</button></span>
          <span id="save-message">All changes saved</span>
        </div>
        <StyledPhenomenonContainer>
          {phenomenaList}
        </StyledPhenomenonContainer>
      </StyledPage>
      </div>
    )
  }
}