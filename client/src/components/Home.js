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
              <li class="nav-item"><a href="#section-2" class="left-underline nav-button" data-scroll>Pioneers</a></li>
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
              <br></br>
                <p class="polarisSubSubs">Antigravity, mind control, bizarre medical experiements ... another world of high strangeness lies just behind the facade of the ordinary. Begin your journey below - click on the list of pioneers to reveal the true(?) tales of very real explorers into the unknown. But be warned ... there is knowledge out there that cannot be forgotten, some sights that cannot be unseen. Welcome to POLARIS.</p>
              </div>
          </div>
          <div class="parallax p2" id="section-2">
            <hgroup0>
              <div class="strange">Pioneers of High Strangeness</div>
              <div class="madScience">        
                <PioneerList />
              </div>
            </hgroup0>
          </div>
        <footer>
          <div class="row" id="section-3">
            <div class="col-3">


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
        </footer>
        </body>
      </div>
    )
  }
}

