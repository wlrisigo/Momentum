import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../Images/logoNav.png'

import {
    Container,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Dropdown
} from 'semantic-ui-react'

class DesktopContainer extends Component {
    state = {}
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
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
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item className="pages">
                                    <Menu.Item as={Link} to={'/Home'}> <Image src={logo2} size='tiny' position='left'/> </Menu.Item>
                                </Menu.Item>
                                <Menu.Item as={Link} to={'/Home'}>Home</Menu.Item>
                                <Menu.Item as={Link} to={'/Services'}>Services</Menu.Item>
                                <Menu.Item as={Link} to={'/OurTeam'}> Our Team</Menu.Item>
                                <Menu.Item as={Link} to={'/contactus'}>Contact Us</Menu.Item>




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
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as={Link} to={'/Home'}>Home</Menu.Item>
                    <Menu.Item as={Link} to={'/Services'}>Services</Menu.Item>
                    <Menu.Item as={Link} to={'/OurTeam'}>Our Team</Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <i className="facebook icon"></i>
                                    <i className="instagram icon"></i>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default ResponsiveContainer;