import React from 'react'
import chris from '../Images/Team/Chris.jpg'
import matt from '../Images/Team/Matt.jpg'
import adam from '../Images/Team/Adam.jpg'
import josh from '../Images/Team/Josh.jpg'
import Body from './team'
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { List } from 'semantic-ui-react'



const DividerExampleVertical = () => (
    <CardDeck>
        <Card fluid>
            <Card.Img variant="top" src={adam} size='tiny'/>
            <Card.Body>
                <Card.Title>Adam Hanrahan: L-ATC, CSAC</Card.Title>
                <Card.Text>
                    Adam is the Manager of United Medical Gym
                    South Portland and Momentum Performance. Adam graduated from the University of Southern Maine with
                    a Bachelor of Science in Athletic Training in 2008. Adam has experience working in a physical
                    therapy clinic from 2007-2013 and has been working Medical Groups and personal training at United
                    Medical Gym South Portland formerly the M.O.G since 2013. Adam is a Certified Athletic Trainer, and
                    Certified Speed and Agility Coach. Adam specialties include additional training in Low Back Disorders
                    through the McGill Method, development in the Functional Safety Screen for neurological conditions and is
                    ACE Certified through the Multiple Sclerosis Society. Adam was married in 2016 and recently celebrated the birth of his son.
                    Adam to this day plays in various soccer leagues and is a champion level yard game participant.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <a href = "mailto: ahanrahan@momentummaine.com"> E-Mail: ahanrahan@MomentumMaine.com </a>
                </small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={chris}/>
            <Card.Body>
                <Card.Title>Chris Pribish: L-ATC, CSCS, CSAC</Card.Title>

                <Card.Text>
                    Chris Graduated from Canisius college with a B.S. Sports Medicine/Athletic
                    Training in 2002. In 2003 Chris became a Certified Athletic Trainer through the NATA BOC and a Certified
                    Strength and Conditioning Specialist through the National Strength and Conditioning Association. His
                    background includes eight years of experience with Saco Bay Physical Therapy designing and implementing
                    orthopedic rehabilitation exercise protocols and over 15 years of personal training individuals of all ages and
                    skill sets. Chris began managing and operating the Medically Oriented Gym in 2011 and developed an
                    individualized, data driven approach to health and fitness; bridging the gap between physical therapy and
                    personal training. While managing the MOG he developed and managed multiple hospital employee wellness
                    programs. In late 2015 Chris became majority owner of the M.O.G. LLC. and rebranded the business as the
                    United Medical Gym South Portland. In Jan 2018 Chris also started Momentum Performance for sport specific
                    training. He has trained athletes who have become State and National champions and State, National and
                    World Record holders. Chris currently is the full-time coach to American Professional Track and Field
                    Champion Kate Hall. Chris has been a guest speaker on numerous health and performance topics nationally.
                    He recently has contracted with The University of Georgia Track and Field team to perform evaluations with
                    corrective exercise prescriptions prior to their first ever National Championship Season. Chris is a consultant
                    and shareholder of the wearable technology company Kinaptics in which he is a co-inventor on multiple health
                    related patients. Chris has completed additional course work and holds the following certifications:

                    <List>
                        <List.Item> </List.Item>
                        <List.Item> </List.Item>
                    </List>


                    <List bulleted>

                    <List.Item>Certified Athletic Trainer through NATA</List.Item>
                    <List.Item>Certified Strength and Conditioning Specialist through NSCA </List.Item>
                    <List.Item>Certified Speed and Agility Coach through Athletes Acceleration Strength and Conditioning</List.Item>
                    <List.Item>Certified Functional Movement Screen</List.Item>
                    <List.Item>Z Health Essentials</List.Item>
                    <List.Item>Course Completion through The Postural Restoration Institution</List.Item>
                    <List.Item>Certified Fascial Abrasion Technique</List.Item>

                    </List>

                </Card.Text>




            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <a href = "mailto: cpribish@momentummanie.com"> E-Mail: cpribish@MomentumMaine.com</a>
                </small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={matt}/>
            <Card.Body>
                <Card.Title>Matthew Marcoux:  L-ATC, CSAC </Card.Title>

                <Card.Text>
                    Matt is a full time Clinical Exercise Instructor and student intern
                    coordinator at United Medical Gym South Portland. Matt graduated from the University of
                    New England in 2013 Cum Laude with a Bachelor of Science in athletic training. Matt has 3
                    years’ experience working with Junior level men’s ice hockey, 3 years’ experience working with
                    physical therapy, and has been doing all aspects of clinical exercise at United Medical Gym, formerly
                    the M.O.G. since 2013. Matt is a Certified Athletic Trainer, and Certified Speed and Agility Coach.
                    Matt’s specialties include Acute Injury Management, Kinesio taping techniques and is ACE Certified
                    through the Multiple Sclerosis Society. Matt was married in 2013 and has one son born in 2016.
                    Matt enjoys tearing up the disc golf world, and challenging his wife, a physical therapist, in all things exercise.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
                <a href = "mailto: mmarcoux@momentummaine.com"> E-Mail: mmarcoux@MomentumMaine.com </a>
            </small>
            </Card.Footer>
        </Card>
    </CardDeck>
)







export default DividerExampleVertical