import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends Component {
    render() {
        return (
            <div className="contact-body" style={{background: 'url(./images/dog-toys.jpg) center / cover'}}>
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px", color:"red", textShadow:"3px 3px 8px aqua"}}>Paris</h2>
                <br/>
                <img
                  src="./images/paris-toy-couch2.jpg"
                  alt=""
                  style={{ height: "350px", width:"280px", border:"3px solid aqua"}}
                />                
                  
              </Cell>
              <Cell col={6}>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize: "73px", color:"red", textShadow:"3px 3px 8px aqua"}}>Contact Me</h2>
                
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent
                        style={{ fontSize: "50px", fontFamily: "Anton", color: "white", textShadow: "3px 3px 8px yellow" }}
                      >
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        0402 123 456
                      </ListItemContent>
                    </ListItem>
                    <br/>
                    <br/>    
                    <ListItem>
                      <ListItemContent
                        style={{ fontSize: "45px", fontFamily: "Anton", color: "white", textShadow: "3px 3px 8px yellow" }}
                      >
                        <i className="fa fa-envelope" aria-hidden="true" />
                        paris@email.com
                      </ListItemContent>
                    </ListItem>
                  </List>
                 
                </div>
              </Cell>
            </Grid>
          </div>
        );
      }
    }

export default Contact;