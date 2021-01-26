import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
    render() {
        return (
            <div>
        <Grid className="landing-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ paddingTop: "2em", color: "lightyellow", textShadow: "2px 2px 2px black", fontFamily: "Lobster, cursive", letterSpacing:"2px", fontSize:"35px"}}>Paris</h3>              
              <img
                src="/images/paris-toy-couch.jpg"
                alt=""
                style={{ height: "350px", border:"3px solid aqua" }}                
              />
            </div>

            <h4 style={{ color: "lightyellow", textShadow: "2px 2px 2px black", fontFamily: "Lobster, cursive", fontSize:"30px"}}>Cute Dog</h4>
            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />
            <p style={{ fontSize:"20px"}}>
              Hello, my name is Paris. As a web sensation, I will be doing 
              my absolute best to give you the cutest pictures for my website
              because I am so adventurous, cute and cuddly.
            </p>
            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", textShadow: "2px 2px 2px black", letterSpacing:"2px", fontSize:"30px"}}>ADDRESS</h5>  

            <p style={{ color: "black", fontSize: "25px"}}>1 Hacker Way Menlo Park, 94025</p>

            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", textShadow: "2px 2px 2px black", letterSpacing:"2px", fontSize:"30px"}}>PHONE</h5> 

            <p style={{ color: "black", fontSize: "25px"}}>0402 123 456</p>

            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", textShadow: "2px 2px 2px black", letterSpacing:"2px", fontSize:"30px"}}>EMAIL</h5>  

            <p style={{ color: "black", fontSize: "25px"}}>paris@email.com</p>

            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />

            <h5 style={{fontFamily: "Lobster, cursive", textShadow: "2px 2px 2px black", letterSpacing:"2px", fontSize:"30px"}}>WEB</h5>  

            <p style={{ color: "black", fontSize: "25px"}}>paristhedog.com</p>
            
            <hr style={{ borderTop: "3px solid aqua", width: "100%" }} />
            
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Education</h2>

            <Education
              startYear={2005}
              endYear={2006}
              schoolName="Dog Obedience School"
              schoolDiscription="School for puppies, so they don't get into trouble later in life."
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Cuteness School"
              schoolDiscription="Completed a 6 month course in being even more adorable."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Experience</h2>
            <Experience
              startYear={2013}
              endYear={2020}
              jobName="Home Dog / Guard Dog"
              jobDiscription="I'm currently staying at home sleeping, poohing on the floor, weeing on the floor and waiting
              for Mummy to come home."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Obedience Skills</h2>
            <Skills skill="FETCH THE BALL" progress={0} />
            <br />
            <Skills skill="COME HERE" progress={20} />
            <br />
            <Skills skill="STOP LICKING THE FLOOR" progress={15} />
            <br />
            <Skills skill="BATH TIME" progress={5} />
            <br />
            <Skills skill="TREAT TIME" progress={100} />
            <br />
            <Skills skill="DINNER TIME" progress={100} />
            <br />
            <Skills skill="TO THE BEACH" progress={100} />
            <br />
            <Skills skill="CAR RIDE" progress={100} />
            <br />
            <Skills skill="A WALK" progress={100} />
          </Cell>
        </Grid>
      </div>
    );
        
    }
}

export default Resume;