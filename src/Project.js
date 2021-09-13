import React, { Component } from "react";
 
class Project extends Component {
  render() {
    return (
      <div>
            <div class="card-container">
              <div class="float-layout">
                <div class="card-image">
                  <img src= "searchWordJs.jpg" width="50%"/>
                  <div class="card">
                    <div class="card-title">Search Word</div>
                    <div class="card-desc">
                       <ul>
                           <li>used by JavaScript and API</li>
                           <li>Provides function of searching words</li>
                           <li>Provides word's pronunciation</li>
                         </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 

            <div class="card-container">
              <div class="float-layout">
                <div class="card-image">
                  <img src= "covidTrackerReact.jpg" width="50%"/>
                  <div class="card">
                    <div class="card-title">Covid Tracker</div>
                    <div class="card-desc">
                         <ul>
                           <li>used by React and API</li>
                           <li>Provides function of searching world's covid cases</li>
                           <li>Displaying vaccination number </li>
                           <li>primitive fetch username and password to json-server </li>
                         </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      

            <div class="card-container">
              <div class="float-layout">
                <div class="card-image">
                  <img src= "rubyCLI.jpg" width="50%"/>
                  <div class="card">
                    <div class="card-title">Ruby CLI</div>
                    <div class="card-desc">
                        <ul>
                          <li> Using Ruby, nokogiri and scraping</li>
                           <li>Runs as a Ruby Gem</li>
                           <li>Scraping data from HTML based website</li>
                           <li>select data from sraping results </li>
                         </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            
            <div class="card-container">
              <div class="float-layout">
                <div class="card-image">
                  <img src= "farmTaskRails.jpg" width="50%"  />
                  <div class="card">
                    <div class="card-title">Farm Task</div>
                    <div class="card-desc">
                    <ul>
                          <li> Using Ruby on Rails </li>
                           <li>Using sqlite 3 to manage tables</li>
                           <li>Providing user authentication when login</li>
                           <li>Using rails forms to connect backend</li>
                         </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    );
  }
}
 
export default Project;