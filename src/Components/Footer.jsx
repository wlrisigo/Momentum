import {Container, Header, Segment, Image} from "semantic-ui-react";
import React from "react";
import logo from '../Images/HomePage/logo2.png'
import {
    List
} from 'semantic-ui-react'

import { Grid, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";

const footer = () => {

return(
    <div className="footer">
    <Segment inverted vertical style={{padding: '5em 0em'}}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src={logo} size='medium' position="right"/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as={Link} to={'/home'}>Home</List.Item>
                            <List.Item as={Link} to={'/services'}>Services</List.Item>
                            <List.Item as={Link} to={'/contactus'}>Contact Us</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>
                          Located At:
                        </Header>

                        <a href="https://www.google.com/maps/place/United+Medical+Gym+South+Portland/@43.6287719,-70.3315852,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29969a9cb1909:0xb07de11961c0e2c9!8m2!3d43.6287719!4d-70.3293965"> <Icon name={'location arrow'}/> 125 John Roberts Rd Suit 16
                            South Portland, Maine 04106</a>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src={logo} size='medium' position="right"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
    </div>
)
}

export default footer;