import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";


class Cute extends Component {
constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
}

toggleCategories() {
    if(this.state.activeTab === 0 ) {
    return(
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'grey', height: '350px', background: 'url(./images/paris-couch.jpg) center / cover'}}></CardTitle>
        <CardText>
        This is me watching Daddy eating toast, I love toast...
        </CardText>
        <CardActions border>        
        <Button colored
                style={{color: "black"}}
                target="_blank"
                href=""></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 1) {
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'purple', height: '350px', background: 'url(./images/paris-on-stool.jpg) center / cover'}}></CardTitle>
        <CardText>
        This is me on a stool waiting for the humans.
        </CardText>
        <CardActions border>        
        <Button colored
                style={{color: "black"}}
                target="_blank"
                href=""></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 2){
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/quiz.png) center / cover'}}></CardTitle>
        <CardText>
        This is my new version of the Quiz.
        </CardText>
        <CardActions border>       
        <Button colored
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/quizwithtimer/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 3){
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/project1.png) center / cover'}}></CardTitle>
        <CardText>
        This is my new first project #1.
        </CardText>
        <CardActions border>        
        <Button colored 
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/perfecthair/">Try It Yourself</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="" />
        </CardMenu>
        </Card>
    )
} else if(this.state.activeTab === 4){
    return (
         <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/budgettracker.png) center / cover'}}></CardTitle>
         <CardText>
         This is my new version of the Budget Tracker.
         </CardText>
         <CardActions border>         
         <Button colored  
                 style={{color: "black"}}
                 target="_blank"
                 href="https://damian545.github.io/budget-tracker/">Try It Yourself</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
         <IconButton name="" />
         </CardMenu>
         </Card>
    )
}  else if(this.state.activeTab === 5){
    return (
         <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/fitnesstracker.png) center / cover'}}></CardTitle>
         <CardText>
         This is my new version of the Fitness Tracker.
         </CardText>
         <CardActions border>         
         <Button colored  
                 style={{color: "black"}}
                 target="_blank"
                 href="https://damian545.github.io/fitness-tracker/">Try It Yourself</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
         <IconButton name="" />
         </CardMenu>
         </Card>
    )
}  else if(this.state.activeTab === 6){
    return (
         <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/portfolio2.png) center / cover'}}></CardTitle>
         <CardText>
         This is my new version of my Updated Portfolio #2.
         </CardText>
         <CardActions border>                   
         <Button colored 
                 style={{color: "black"}}
                 target="_blank"
                 href="https://damian545.github.io/new-updatedportfolio2/">Click Here To See More</Button>          
         </CardActions>           
         <CardMenu style={{color: '#fff'}}>           
         <IconButton name="" />           
         </CardMenu>          
         </Card>           
    )
}  else if(this.state.activeTab === 7){
    return (
        <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '200px', background: 'url(./images/milestone5.png) center / cover'}}></CardTitle>
        <CardText>
         This is my new version of the Milestone #5.
        </CardText>
        <CardActions border>        
        <Button colored                 
                style={{color: "black"}}
                target="_blank"
                href="https://damian545.github.io/milestone-5/">Click Here To See More</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="" />
        </CardMenu>
        </Card>
    )
}     
}
    render() {
        return (
            <div className="category-tabs">
                <Tabs style={{ backgroundColor: "gray"}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                 <Tab style={{ color: "aqua"}}>Waiting for some toast</Tab>
                 <Tab style={{ color: "aqua"}}>Waiting for humans to finish dinner</Tab>
                 <Tab style={{ color: "aqua"}}></Tab>
                 <Tab style={{ color: "aqua"}}></Tab>
                 <Tab style={{ color: "aqua"}}></Tab>
                 <Tab style={{ color: "aqua"}}></Tab>
                 <Tab style={{ color: "aqua"}}></Tab> 
                 <Tab style={{ color: "aqua"}}></Tab>                
                </Tabs>


                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Cute;