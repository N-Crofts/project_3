import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledPhenomenonContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
text-wrap: normal;
padding-top: 27px;
`

const StyledPhenomenon = styled.div`
background-color: rgba(226,240,255,0.6);
margin: 30px;
padding: 10px;
text-wrap: normal;
box-shadow: 7px 7px 7px #2a4863;

div {
  font-size: 14px;
}

&:hover {
  #phenomenon-title > span {
    display: inline;
  }
}

#phenomenon-title {
  color: #363636;
  font-weight: 700;
  letter-spacing: 0.5vw;
  padding-left: 15px;
  margin: 0 0 10px 0;
  border-bottom: none;
  span {
    float: right;
    display: none;
  }
}

#phenomenon-description {
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  padding: 15px;
  text-wrap: normal;
  color: #363636;
}

textarea {
  border: none;
  border-bottom: 1px solid #444444;
}

.containerFooter {
  font-size: 12px;
  letter-spacing: 0.2vw;
  color: #5a5a5a;
}
`
const StyledButton = styled.button`
    position: absolute;
    left: 45%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    /* margin: 5px; */
    font-size: 15px;
    color: #262626;
    padding: 0.75em;
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
    window.scrollTo(0, 0)
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
        <span class="containerFooter" onClick={() => this.handleDelete(phenomenon._id)} >x  delete this story</span>
      </StyledPhenomenon>
    })
    
      return (
        <div>
          <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/1.5.5/jquery.smooth-scroll.min.js"></script>
          </head>
          <body class="bodyTwo">
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'/>
            <div class="navbarTwo">
              <ul class="navbar-containerTwo">
                <li><a href="/" class="left-underlineTwo nav-buttonTwo brand-logoTwo"> P O L A R I S</a></li>
                <li class="nav-itemTwo"><a href="javascript:history.back()" class="left-underlineTwo nav-buttonTwo" data-scroll>Pioneers</a></li>
             </ul>
            </div>
            <div class="parallaxTwo pTwo1" id="section-1Two">
              <hgroup2>
                <h3>{this.state.pioneer.pioneerName}</h3>
              </hgroup2>
            </div>
            <div class="rowTwo">
              <div class="col-1Two">
                <StyledButton onClick={this.handleNew}>Add Phenomenon</StyledButton>
                  <StyledPhenomenonContainer>
                    {phenomenaList}
                  </StyledPhenomenonContainer>
              </div>
            </div>
            <div class="parallaxTwo pTwo2" id="section-2Two"></div>
          <footer2>
            <div class="rowTwo" id="section-3Two">
              <div class="col-3Two">
              <div class="newFooter">
              <ul>
        <li><a href="mailto:nicholas.crofts@gmail.com"><i class="fa fa-envelope"></i></a></li>

    <li><a href="https://github.com/N-Crofts/project_3" target="_blank"><i class="fa fa-github"></i></a></li>
    <li><a href="https://www.linkedin.com/in/N-Crofts" target="_blank"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="https://twitter.com/NicholasCrofts" target="_blank"><i class="fa fa-twitter"></i></a></li>
    <li><a href="http://www.instagram.com/nico_laos" target="_blank"><i class="fa fa-instagram"></i> </a></li>
</ul>
              </div>

            </div>
          </div>
        </footer2>
        </body>
      </div>
    )
  }
}