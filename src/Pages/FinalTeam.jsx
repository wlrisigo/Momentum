/* eslint-disable max-len */

import Team from '../Components/theTeam'
import Nav from '../Components/navbar'
import Footer from '../Components/Footer'
import pic from '../Images/Header.png'
import React from 'react';
import {Container, Header, Image, Segment} from 'semantic-ui-react'
import Map from '../Components/googleMap'


const thePage = () => {

        return (
            <Nav>
                <Segment inverted>
                <Image className="Logo-Header" src={pic} size='large' centered={true} />
                </Segment>
                <Team className="Team"/>
                <Footer/>
            </Nav>
    );

}

export default thePage;