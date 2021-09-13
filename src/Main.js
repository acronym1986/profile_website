import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";
import ScrollspyNav from "react-scrollspy-nav";
 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <img className="logo" src="/timLogo.png" alt="timLogo" />

          <ScrollspyNav
                    scrollTargetIds={["about", "experience", "project"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                    router="HashRouter"
                > </ScrollspyNav>
           
          <ul className="header">
             <li><NavLink exact to="/">About</NavLink></li>
             <li><NavLink to="/experience">Experience</NavLink></li>
             <li><NavLink to="/education">Education</NavLink></li>
             <li><NavLink to="/project">Project</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          

          <div className="content">
             <Route exact path="/" component={About}/>
             <Route path="/experience" component={Experience}/>
             <Route path="/education" component={Education}/>
             <Route path="/project" component={Project}/>
             <Route path="/contact" component={Contact}/>
             
          </div>
         
        </div>
      </HashRouter>
      
    );
  }
}
 
export default Main;