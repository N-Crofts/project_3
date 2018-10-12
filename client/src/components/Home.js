import React, { Component } from 'react'
import PioneerList from './PioneerList'

export default class Home extends Component {
  render() {
    return (
      <div>
        <head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/1.5.5/jquery.smooth-scroll.min.js"></script>
        </head>
        <body>
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'/>
          <div class="navbar">
            <ul class="navbar-container">
              <li><a href="/" class="left-underline nav-button brand-logo"> P O L A R I S</a></li>
              <li class="nav-item"><a href="/timeline" class="left-underline nav-button" data-scroll>Timeline</a></li>
              <li class="nav-item"><a href="#section-2" class="left-underline nav-button" data-scroll>Pioneers</a></li>
              {/* <li class="nav-item active"><a href="#section-1" class="left-underline nav-button" data-scroll>Phenomena</a></li> */}
            </ul>
          </div>
          <div class="parallax p1" id="section-1">
            <hgroup>
              <h1>POLARIS</h1>
            </hgroup>
          </div>
          <div class="row">
            <div class="col-1">
              <div class="polarisSub">An archive of brilliant minds, strange phenomena, and hidden history.</div>
                <p>Antigravity, mind control, bizarre medical experiements ... another world of high strangeness lies just behind the facade of the ordinary. Begin your journey below - click on the list of pioneers below to reveal the true(?) tales of very real explorers into the unknown. But be warned ... there is knowledge out there that cannot be unlearned, some sights that cannont be unseen. Welcome to POLARIS.</p>
              </div>
          </div>
          <div class="parallax p2" id="section-2">
            <hgroup0>
              <h3>Pioneers of High Strangeness</h3>
              <div class="madScience">        
                <PioneerList />
              </div>
            </hgroup0>
          </div>
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