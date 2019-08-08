import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ThreePhotos from "../Components/GridLayout"
import SlideShow from '../Components/Photo'
import kid from '../Images/HomePage/Kid_Prib.jpg'

import Slides from '../Components/SlideShow'
import { Link } from 'react-router-dom'
import logo from '../Images/HomePage/BIGMPW.png'
import logo2 from '../Images/logoNav.png'
import Footer from '../Components/Footer'

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
 *
 */



const HomepageHeading = ({ mobile }) => (
    <Container text>



        <SlideShow photo={logo} />


        {/*<Header*/}
            {/*as='h2'*/}
            {/*content='A Smarter Way to Train'*/}
            {/*inverted*/}
            {/*style={{*/}
                {/*fontSize: mobile ? '1.5em' : '1.7em',*/}
                {/*fontWeight: 'normal',*/}
                {/*marginTop: mobile ? '0.5em' : '1.5em',*/}
            {/*}}*/}

        {/*/>*/}
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

                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                        inverted
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
                    <Menu.Item as={Link} to={'/Home'}>Home</Menu.Item>
                    <Menu.Item as={Link} to={'/Services'}>Services</Menu.Item>
                    <Menu.Item as={Link} to={'/OurTeam'}>Our Team</Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        // inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu
                                // inverted
                                pointing secondary size='large'>
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
                    <Grid.Column floated='left' width={6}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Mission Statement
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Momentum Performance and Wellness – We are Maine’s foremost team of committed medical professional Athletic Trainers and Strength and Conditioning Coaches. Without exception, we bring research and science-based programming to train, educate, motivate and challenge our clients, so they can achieve optimal health, empowering them to maximize their performance, to reach and surpass their goals.
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Our Vision
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            An individualized scientific approach to performance, rehabilitation and wellness. A smarter way to train and stay healthy.
                        </p>
                    </Grid.Column>
                    <Grid.Column color='black' floated='right'  width={8} style={{margin: '0em 0em 0em 5em'}}>

                        <Slides/>
                        <div  style={{margin: '-100px,0px,10em,0px'}}>
                            <Image src={logo} size='large' centered/>

                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                </Grid.Row>
            </Grid>
        </Segment>
        {/*FOR QUOTES*/}
        {/*<Segment style={{ padding: '0em' }} vertical>*/}
            {/*<Grid celled='internally' columns='equal' stackable>*/}
                {/*<Grid.Row textAlign='center'>*/}
                    {/*<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>*/}
                        {/*<Header as='h3' style={{ fontSize: '2em' }}>*/}
                            {/*"Quote from someone"*/}
                        {/*</Header>*/}
                        {/*<p style={{ fontSize: '1.33em' }}>Known for</p>*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>*/}
                        {/*<Header as='h3' style={{ fontSize: '2em' }}>*/}
                            {/*"Quote From Someone."*/}
                        {/*</Header>*/}
                        {/*<p style={{ fontSize: '1.33em' }}>*/}
                            {/*<Image avatar src={Kate} />*/}
                            {/*<b>Kate Hall</b> Professional and National Division 1 Long-Jump Champion*/}
                        {/*</p>*/}
                    {/*</Grid.Column>*/}
                {/*</Grid.Row>*/}
            {/*</Grid>*/}
        {/*</Segment>*/}
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment style={{ padding: '8em 0em' }} vertical>


            <ThreePhotos />

        </Segment>
        </Responsive>
        <Footer/>


    </ResponsiveContainer>
)
export default HomepageLayout