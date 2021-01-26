import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Landing extends Component {
    render() {
        return (
            <div style={{width: "100%", margin: "auto"}}>
<Grid className="landing-grid">
<Cell col={12}>
    <img
    src="./images/paris-computer.jpg"
    alt=""
    className="img"
    style={{border:"3px solid aqua", height: "350px", width:"300px" }}
    />
    <div className="banner-text">
        <h1 style={{fontFamily: "Lobster, cursive", fontSize: "73px"}}>Paris, The Cutest Maltese Chihuahua In The World!!</h1>

        <hr/>

        <p>PLAYING | EATING | LICKING | SLEEPING </p>

        <div className="social-links">            
            <a href="https://google.com">
                <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>
            <a href="https://google.com">
                <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="https://google.com">
                <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="https://google.com">
                <i className="fa fa-snapchat" aria-hidden="true" />
            </a>
        </div>
    </div>
</Cell>
</Grid>
            </div>
        )
    }
}

export default Landing;