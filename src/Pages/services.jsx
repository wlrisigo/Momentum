
import Nav from '../Components/navbar'

import React from 'react';
import {Image, Segment, Header} from "semantic-ui-react";
import pic from "../Images/Header.png";
import Serv from "../Components/Serv";
import Footer from "../Components/Footer";
import logo2 from "../Images/logoNav.png";






const Services = () => {

    return (
        <Nav>
            <Header as='h2' image={logo2} content='Services' style={{marginLeft:"43%"}} />
            <Serv className="Serv"/>
            <Footer/>
        </Nav>
    );

}

export default Services;