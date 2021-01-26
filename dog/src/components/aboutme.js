import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Aboutme extends Component {
    render() {
        return (
            <div className="contact-body" style={{background: "#f37335"}}>
            <Grid className="contact-grid">
              <Cell className="aboutme" col={8}>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>About Me</h2>
                <hr style={{ borderTop: "3px solid #e22947", width: "100%" }} />
                <br/>
                <p>
                Hello, my name is Paris. I am 15 years old and I am so cute that you'll fall in love 
                with me at first glance. I like to lick the floor of the house because my humans always drop food.
                I love going to the beach and meeting new friends (sometimes, they are too big or too playful and they scare me!)
                I also like playing with my toy or sleeping waiting for dinner. On occasions, I will pooh and wee in the house 
                because I fart arse around out the backyard for too long and Mummy takes me inside before I can go to the toilet!! Oopsy, Daddy 
                can clean that up for me..
                </p>                
              </Cell>
              <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ paddingTop: "2em", color: "lightyellow", textShadow: "2px 2px 2px black", fontFamily: "Lobster, cursive", fontSize:"35px", letterSpacing:"2px"}}>Paris</h3>              
              <img
                src="/images/paris-toy-couch2.jpg"
                alt=""
                style={{ height: "350px", width:"260px", border:"3px solid aqua"}}
                 
              />
            </div>            
            </Cell>
            </Grid>
          </div>  
        );
    }
}

export default Aboutme;