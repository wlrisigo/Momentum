
/* eslint-disable max-len */

import Nav from '../Components/navbar'
import Footer from "../Components/Footer";



import React from 'react';
import {Header, Container, Icon} from 'semantic-ui-react'
import Map from '../Components/googleMap'


const thePage = () => {

    return (
        <Nav>
            <body>
            <div className='contactus'>


            <Header as='h1' className="H2">Contact Us</Header>
                <Header as='h3' className="H2">(207) 347-3030</Header>

            <Map className='map'/>
            <Container>
                <a className='Location' href="https://www.google.com/maps/place/United+Medical+Gym+South+Portland/@43.6287719,-70.3315852,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29969a9cb1909:0xb07de11961c0e2c9!8m2!3d43.6287719!4d-70.3293965"> <Icon name={'location arrow'}/> <b>Location:</b> 125 John Roberts Rd Suit 16
                    South Portland, Maine 04106</a>
                {/*<Form className='forms'/>*/}
            </Container>
            </div>
            </body>
            <div className="foot">
            <Footer className/>
            </div>
        </Nav>
);

}

export default thePage;