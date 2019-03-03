import Form from '../Components/contactForm'
import Nav from '../Components/navbar'

import React from 'react';
import {Image, Segment, Header} from "semantic-ui-react";
import pic from "../Images/Header.png";
import Serv from "../Components/Serv";
import Footer from "../Components/Footer";



const Services = () => {

    return (
        <Nav>
            <Segment inverted>
                <Image className="Logo-Header" src={pic} size='large' centered={true} />
            </Segment>
            <Header size="huge" className='Service'>Services</Header>
            <Serv className="Serv"/>
            <Footer/>
        </Nav>
    );

}

export default Services;