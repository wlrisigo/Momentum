import React from 'react'
import { Divider, Grid, Image, Segment, Header, List, Responsive, Card } from 'semantic-ui-react'
import kate from '../Images/KatesPro.jpg'
import well from '../Images/Well.jpg'
import Nav from "./navbar";

const DividerExampleVertical = () => (
    <Segment >
        <Grid columns={2} relaxed='very' stackable={true} >
            <Grid.Column>
                <Header className="Server" > Wellness </Header>
                <Image src={well} className="ServicePics" centered={true} />
                <Card.Group>
                    <Card fluid color='red'>
                        <Card.Content>
                            <Card.Header>Full Membership</Card.Header>
                            <Card.Meta>$80/month or $130/month family</Card.Meta>
                            <Card.Description> Full Membership includes initial evaluation with quarterly re-evals. Evaluation
                                consists of exercise is medicine education, full health history, orthopedic movement screen,
                                nutritional education, goal setting  and biometric data collection. Following each eval/ re-eval
                                is an individual personal training session to teach a custom exercise prescription that addresses
                                goals and findings from the evaluation. Exercise programs are progressed quarterly. Membership includes
                                access to exercise prescription videos via our FREE app., injury consultations and program adjustments at
                                no additional cost.</Card.Description>
                        </Card.Content>
                    </Card>

                    <Card fluid color='blue'>
                        <Card.Content>
                            <Card.Header>Medical Membership</Card.Header>
                            <Card.Meta>$110/month  (additional $75 if movement screen is warranted)</Card.Meta>
                            <Card.Description> For individuals struggling with a variety of health
                                concerns that need a more supervised approach. Individuals are placed into a group setting
                                with a trainer monitoring their programming at a 4:1 ratio. Everyone is still given an
                                evaluation upon signing up and is re-evaluated every six months. Individuals are still given
                                individualized programs and are updated regularly as they can progress. Members in these groups
                                generally have neuromuscular disorders, memory issues or fall risks.</Card.Description>
                        </Card.Content>
                    </Card>

                        <Card fluid color='red'>
                            <Card.Content>
                                <Card.Header>Home Exercise Programs</Card.Header>
                                <Card.Meta>$250</Card.Meta>
                                <Card.Description> Home Exercise Programs are available for those who are unable to get to the
                                    gym or are too uncomfortable to go. This gives people a great starting program to help build confidence and
                                    health before working their way to the gym. Includes eval with
                                    2 training sessions and 2 programs.</Card.Description>
                            </Card.Content>
                        </Card>


                    <Card fluid color='red'>
                        <Card.Content>
                            <Card.Header>Small Group Personal Training</Card.Header>
                            <Card.Meta>$55/session or 10 pack for $500 </Card.Meta>
                            <Card.Description>For those who need some motivation in a group setting,
                            this option is ideal. Training sessions are in groups of 2-6 people and designed to fit
                            everyone’s needs.</Card.Description>
                        </Card.Content>
                    </Card>


                    <Card fluid color='red'>
                        <Card.Content>
                            <Card.Header>Personal Training</Card.Header>
                            <Card.Meta>$75 or $85/session</Card.Meta>
                            <Card.Description> Personal training sessions are one on one with a
                                Certified Athletic Trainer, CSCS, CSAC or CPT designed around each person’s individual needs
                                or goals. Exercise programming is adapted and progressed regularly for optimal results
                               </Card.Description>
                        </Card.Content>
                    </Card>

                    <Card fluid color='red'>
                        <Card.Content>
                            <Card.Header>Home Exercise Programs</Card.Header>
                            <Card.Meta>$250</Card.Meta>
                            <Card.Description> Home Exercise Programs are available for those who are unable to get to the
                                gym or are too uncomfortable to go. This gives people a great starting program to help build confidence and
                                health before working their way to the gym. Includes eval with
                                2 training sessions and 2 programs.</Card.Description>
                        </Card.Content>
                    </Card>




                </Card.Group>

                <List divided={true} relaxed="very" >

                    <List.Item> <b>Personal Training:</b> Personal training sessions are one on one with a
                        Certified Athletic Trainer, CSCS, CSAC or CPT designed around each person’s individual needs
                        or goals. Exercise programming is adapted and progressed regularly for optimal results
                        <div> <b> Price: </b>$75 or $85/session  </div>
                        <b>Discounted Packages:</b> 11 sessions $750 or $850
                    </List.Item>


                    <List.Item> <b>Medical Personal Training:</b> for individuals that need additional orthopedic
                        rehabilitation or injury prevention. This service is a perfect complement for post physical
                        therapy patients who are still in need of guided advance physical training.
                        This service is done with a Licensed Certified Athletic Trainer with the emphasis on
                        returning to full function, pain-free lifestyle in a quick and cost-efficient way.
                        <div> <b> Price: </b>$75 or $85/session  </div>
                        <b>Discounted Packages:</b> 11 sessions $750 or $850
                    </List.Item>



                </List>


            </Grid.Column>



            <Grid.Column>
                <Header className="Servers" > Performance </Header>
                    <Image src={kate} className="ServicePics" centered={true} />
                <List divided={true}  relaxed='very'>
                    <List.Item> <b>Performance Training:</b> For the individual looking to improve their athletic performance. Functional Movement Screen along with our specialized athletic performance evaluation are performed looking in depth at movement mechanics and individual components of sports performance.
                        <div> <b>Price:</b> $75 or $85 per session</div> 	<b>Discounted Packages</b> of 11 sessions $750 or $850</List.Item>

                    <List.Item>   <b>Student Athlete Membership:</b> Evaluation and program designed with access to the
                        gym during all operating hrs. This membership is available to student athletes that must also
                        maintain a minimum of 1 personal training session a month.
                        <div> <b>Price:</b> $50/month </div> </List.Item>

                    <List.Item>   <b>Group Performance Training</b> For small groups of athletes working toward a similar goal.
                        Training sessions are in groups of 2-6 people which still allows attention to details and individualized adjustments during sessions.
                        Call for details on <b>larger groups or team training </b>.
                        <div> <b>Price:</b> $55/session or 10 pack for $500 </div> </List.Item>


                    <List.Item> <b>Home Performance Programs:</b>  Available for those who will be exercising at home
                        or at another location. Includes performance evaluation with 2 training sessions and 2 programs.
                        <div> <b>Price:</b> $250 </div> </List.Item>

                    <List.Item>   <b>Injury Consultations:</b> Free injury consultations for all members by Licensed
                        Certified Athletic Trainers. This service is designed to prevent acute injuries and irritations
                        from turning into chronic conditions
                        or problems that may require missed time from work or play. Early intervention is about identifying and
                        responding to warning signs and injuries before they escalate.</List.Item>

                    <List.Item> <b>Combine Testing</b> Testing sports attributes such as speed, power, and agility using
                        Fusion Sport’s Smart Speed laser gate system and Smart Jump pad.
                        An objective way to measure team performance values.
                        <div> <b>Call for pricing and details</b>  </div> </List.Item>

                    <List.Item> <b>FMS- Functional Movement Screen</b> with corrective exercise to ensure a balance between mobility, stability and strength. This consists of 2 sessions.
                        <div> <b> Price: </b>$150  </div> </List.Item>



                    <List.Item>
                        <b>F.A.T. Tool: </b> A fascia abrasion soft tissue technique to improve tissue mobility, decrease tightness/discomfort and improve healing time.
                        <div> <p><b>Price:</b> 30 min session $45 or 60 min session $85 </p> </div>



                    </List.Item>
                </List>

            </Grid.Column>
        </Grid>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}> <Divider vertical> </Divider> </Responsive>
    </Segment>
)

export default DividerExampleVertical