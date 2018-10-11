import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledPhenomenonContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
text-wrap: normal;
`

const StyledPhenomenon = styled.div`
background-color: #cfd8dc;
margin: 30px;
padding: 10px;
text-wrap: normal;
box-shadow: 6px 6px 6px #6497b1;

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

#phenomenon-description {
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  text-wrap: normal;

}
`

export default class StrangePhenomena extends Component {
  state = {
    pioneer: {},
    phenomena: [
    ]
}

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



  render() {
    const phenomenaList = this.state.phenomena.map((phenomenon, i) => {
      return <StyledPhenomenon key={i}>        
        <input type='text' id="phenomenon-title" name='title' value={phenomenon.title} 
          onChange={(event) => this.handleChange(event, i)} 
          onBlur={() => this.updatePhenomenon(i)} />    
        <textarea type='text' id="phenomenon-description" name='description' value={phenomenon.description}
          onChange={(event) => this.handleChange(event, i)} 
          onBlur={() => this.updatePhenomenon(i)}  />
        <span onClick={() => this.handleDelete(phenomenon._id)} >x</span>
      </StyledPhenomenon>
    })
    
      return (
        <div>
          <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/1.5.5/jquery.smooth-scroll.min.js"></script>
          </head>
          <body>
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'/>
            <div class="navbar">
              <ul class="navbar-container">
                <li><a href="/" class="left-underline nav-button brand-logo"> POLARIS</a></li>
                <li class="nav-item"><a href="#section-3" class="left-underline nav-button" data-scroll>Timeline</a></li>
                <li class="nav-item"><a href="#section-2" class="left-underline nav-button" data-scroll>Pioneers</a></li>
                <li class="nav-item active"><a href="#section-1" class="left-underline nav-button" data-scroll>Phenomena</a></li>
             </ul>
            </div>
            <div class="parallax p1" id="section-1">
              <hgroup>
                <h1>{this.state.pioneer.pioneerName}</h1>
              </hgroup>
            </div>
            <div class="row">
              <div class="col-1">
                <button onClick={this.handleNew}>Add Phenomenon</button>
                <StyledPhenomenonContainer>
                  {phenomenaList}
                </StyledPhenomenonContainer>
              </div>
            </div>
            <div class="parallax p2" id="section-2"></div>
          <footer>
            <div class="row" id="section-3">
              <div class="col-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum tortor ac dui malesuada, id molestie elit aliquam. Fusce laoreet nisl id tellus molestie mattis. Fusce vitae ante quis augue imperdiet rutrum a vitae purus. Etiam tincidunt enim id turpis varius, in condimentum elit.</p>
              </div>
            </div>
          </footer>
          </body>
        </div>
      )
    }
  }