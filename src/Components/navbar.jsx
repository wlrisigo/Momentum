import React, { Component } from 'react'
import {Container, Menu, Responsive, Visibility, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import logo from '../Images/logoNav.png'
//import logo2 from '../Images/Header.png'

class nav extends Component {
    state = {}
    insta = () => this.setState(window.location='https://www.instagram.com/momentum.performance/?hl=en');
    face = () => this.setState(window.location='https://www.facebook.com/MomentumMaine/?epa=SEARCH_BOX');


    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                        <Menu
                            fixed={'top'}
                            size='large'
                        >
                            <Container>
                                <Menu.Item className="pages">
                                    <Image src={logo} size='tiny' position='left'/>
                                </Menu.Item>
                                <Menu.Item as={Link} to={'/Home'}>
                                    Home
                                </Menu.Item>
                                <Menu.Item as={Link} to={'/Services'}>Services</Menu.Item>
                                <Menu.Item as={Link} to={'/OurTeam'}> Our Team</Menu.Item>
                                <Menu.Item as={Link} to={'/ContactUs'}>Contact Us</Menu.Item>
                                <Menu.Item position='right'>
                                    <div className="Social">
                                        <button onClick={this.face} className="ui facebook button">
                                            <i className="facebook icon"></i>
                                            Facebook
                                        </button>
                                        <button onClick={this.insta} className="ui instagram button">
                                            <i className="instagram icon"></i>
                                            Instagram
                                        </button>
                                    </div>
                                </Menu.Item>

                            </Container>
                        </Menu>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

nav.propTypes = {
    children: PropTypes.node,
}


export default nav;