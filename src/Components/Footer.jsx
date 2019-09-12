import {Container, Header, Segment, Image, Responsive} from "semantic-ui-react";
import React from "react";
import logo from '../Images/logoNav.png'
import {
    List
} from 'semantic-ui-react'

import { Grid, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";

const footer = () => {

return(
    <div className="footer">
    <Segment inverted vertical style={{padding: '2em 0em'}}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>

                        <Grid.Column width={3}>
                            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                                <Image src={logo} size='medium' position="center"/>
                            </Responsive>
                        </Grid.Column>

                    <Grid.Column width={2}>

                        <Responsive minWidth={992}>
                        <Header inverted as='h4' content='About' style={{paddingLeft:"30%"
                                                                                 }} />
                        <div style={{textAlign:"center"}}>
                            <List link inverted >
                                <List.Item as={Link} to={'/home'}>Home</List.Item>
                                <List.Item as={Link} to={'/services'}>Services</List.Item>
                                <List.Item as={Link} to={'/Team'}>Team</List.Item>
                            </List>
                        </div>
                    </Responsive>

                        <Responsive maxWidth={991}  minWidth={767}>
                            <Header inverted as='h4' content='About' style={{paddingLeft:"12%"}} />
                            <div style={{textAlign:"center"}}>
                                <List link inverted >
                                    <List.Item as={Link} to={'/home'}>Home</List.Item>
                                    <List.Item as={Link} to={'/services'}>Services</List.Item>
                                    <List.Item as={Link} to={'/Team'}>Team</List.Item>
                                </List>
                            </div>
                        </Responsive>


                        <Responsive maxWidth={767}>
                            <Header inverted as='h4' content='About' style={{paddingLeft:"44%"}} />
                            <div style={{textAlign:"center"}}>
                                <List link inverted >
                                    <List.Item as={Link} to={'/home'}>Home</List.Item>
                                    <List.Item as={Link} to={'/services'}>Services</List.Item>
                                    <List.Item as={Link} to={'/Team'}>Team</List.Item>
                                </List>
                            </div>
                        </Responsive>


                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Responsive minWidth={992}>

                            <Header as='h4' inverted style={{paddingLeft:"30%"}}>
                                Contact Information
                            </Header>
                            <div style={{textAlign:"center"}}>

                                <div><a href = "mailto: info@MomentumMaine.com">Email: info@MomentumMaine.com</a></div>
                                <div><a href="tel: 207-347-3030">Phone: (207)347-3030</a></div>
                                <a href="https://www.google.com/maps/place/United+Medical+Gym+South+Portland/@43.6287719,-70.3315852,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29969a9cb1909:0xb07de11961c0e2c9!8m2!3d43.6287719!4d-70.3293965"> <Icon name={'location arrow'}/> 125 John Roberts Rd Suit 16
                                    South Portland, Maine 04106</a>
                            </div>

                        </Responsive>



                        <Responsive   maxWidth={991}  minWidth={767}>
                            <Header as='h4' inverted style={{paddingLeft:"12%"}} >
                                Contact Information
                            </Header>
                        <div style={{textAlign:"center"}}>

                        <div><a href = "mailto: info@MomentumMaine.com">Email: info@MomentumMaine.com</a></div>
                        <div><a href="tel: 207-347-3030">Phone: (207)347-3030</a></div>
                        <a href="https://www.google.com/maps/place/United+Medical+Gym+South+Portland/@43.6287719,-70.3315852,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29969a9cb1909:0xb07de11961c0e2c9!8m2!3d43.6287719!4d-70.3293965"> <Icon name={'location arrow'}/> 125 John Roberts Rd Suit 16
                            South Portland, Maine 04106</a>
                        </div>

                        </Responsive>


                        <Responsive maxWidth={766}>

                            <Header as='h4' inverted style={{paddingLeft:"32%"}}> Contact Information </Header>
                            <div style={{textAlign:"center"}}>

                                <div><a href = "mailto: info@MomentumMaine.com">Email: info@MomentumMaine.com</a></div>
                                <div><a href="tel: 207-347-3030">Phone: (207)347-3030</a></div>
                                <a href="https://www.google.com/maps/place/United+Medical+Gym+South+Portland/@43.6287719,-70.3315852,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29969a9cb1909:0xb07de11961c0e2c9!8m2!3d43.6287719!4d-70.3293965"> <Icon name={'location arrow'}/> 125 John Roberts Rd Suit 16
                                    South Portland, Maine 04106</a>
                            </div>

                        </Responsive>


                    </Grid.Column>




                    <Grid.Column width={5}>

                        <Responsive minWidth={992}>
                            <Header inverted as='h4' inverted style={{paddingLeft:"30%"}}> Hours of Operation </Header>
                        <div style={{textAlign:"center"}}>
                        <div>  5:00am - 8:00pm Monday-Thursday </div>
                        <div>  5:00am - 7:00pm Friday </div>
                        <div>  8:00am - 2:00pm Saturday-Sunday </div>
                        </div>
                        </Responsive>

                        <Responsive   maxWidth={991}  minWidth={767}>
                            <Header inverted as='h4' inverted style={{paddingLeft:"12%"}}> Hours of Operation </Header>
                            <div style={{textAlign:"center"}}>
                                <div>  5:00am - 8:00pm Monday-Thursday </div>
                                <div>  5:00am - 7:00pm Friday </div>
                                <div>  8:00am - 2:00pm Saturday-Sunday </div>
                            </div>
                        </Responsive>

                        <Responsive maxWidth={766}>

                            <Header inverted as='h4' inverted style={{paddingLeft:"32%"}}> Hours of Operation </Header>
                            <div style={{textAlign:"center"}}>
                                <div>  5:00am - 8:00pm Monday-Thursday </div>
                                <div>  5:00am - 7:00pm Friday </div>
                                <div>  8:00am - 2:00pm Saturday-Sunday </div>
                            </div>
                        </Responsive>

                    </Grid.Column>



                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
    </div>
)
}

export default footer;