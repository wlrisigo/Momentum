import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SlideShow from '../Components/Photo'
import kid from '../Images/HomePage/Kid_Prib.jpg'
import Vid from '../Components/video'
import Kate from '../Images/HomePage/KateHall.jpg'
import { Link } from 'react-router-dom'
import logo from '../Images/HomePage/logo2.png'
import logo2 from '../Images/logoNav.png'
import {
    Container,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>

          <SlideShow photo={logo} />

        <Header
            as='h2'
            content='A Smarter Way to Train'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}

        />
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
                        style={{ minHeight: 700, padding: '1em 0em' }}
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
                                    <Image src={logo2} size='tiny' position='left'/>
                                </Menu.Item>
                                <Menu.Item as='a' active>
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
                        <HomepageHeading />
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
                    <Menu.Item as='a' active>
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/Home'}>Home</Menu.Item>
                    <Menu.Item as={Link} to={'/Services'}>Services</Menu.Item>
                    <Menu.Item as={Link} to={'/OurTeam'}>Our Team</Menu.Item>
                    <Menu.Item as={Link} to={'/Home'}>Contact Us</Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
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
                        <HomepageHeading mobile />
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

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Mission Statement
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Momentum Performance – We are Maine’s foremost team of committed medical professional Athletic Trainers and Strength and Conditioning Coaches. Without exception, we bring research and science-based programming to train, educate, motivate and challenge our clients, so they can achieve optimal health, empowering them to maximize their performance, to reach and surpass their goals.
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Our Vision
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            A scientific approach to wellness and performance. A smarter way to train.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src={kid} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "Quote from someone"
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>Known for</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "Quote From Someone."
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <Image avatar src={Kate} />
                            <b>Kate Hall</b> Professional and National Division 1 Long-Jump Champion
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <div className='Record'> <Vid />
            </div>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
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
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
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
    </ResponsiveContainer>
)
export default HomepageLayout