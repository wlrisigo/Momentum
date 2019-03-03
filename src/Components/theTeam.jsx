import React from 'react'
import MugShot from './imageCirc'
import chris from '../Images/Team/Chris.jpg'
import matt from '../Images/Team/Matthew.jpg'
import adam from '../Images/Team/Adam.jpg'
import josh from '../Images/Team/Josh.jpg'
import Body from './team'
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";



const DividerExampleVertical = () => (
    <CardDeck>
        <Card>
            <Card.Img variant="top" src={adam}/>
            <Card.Body>
                <Card.Title>Adam Hanrahan</Card.Title>
                <Card.Text>
                    Adam Hanrahan L-ATC, CSAC -Adam is the Manager of United Medical Gym
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
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={chris}/>
            <Card.Body>
                <Card.Title>Chris Pribish</Card.Title>
                <Card.Text>
                    Let’s take some time to match a face to our location. Chris Pribish L-ATC, CSCS, CSAC – Chris is
                    the Director of United Medical Gym South Portland and Momentum Performance. Chris graduated from Canisius
                    college with a Bachelor of Science in Sports Medicine in 2002 where he was an all-state collegiate rugby player. Chris has 8 years’
                    experience working with Saco Bay Physical Therapy and has been doing personal training with United Medical Gym South Portland, formerly
                    the M.O.G. since 2011. Chris is a Certified Strength and Conditioning Specialist, Certified Athletic Trainer, Certified Speed and Agility
                    Coach and has completed further education including Z-Health Education Certification, Course work with Postural Restoration Institute and
                    Facial Abrasion Technique and Functional Movement Screen. Chris was married in September of 2014 and has two wonderful kids. Chris’ hobbies
                    include rooting for all New England sports and enjoying outdoor activities in his spare time.

                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={matt}/>
            <Card.Body>
                <Card.Title>Matthew Marcoux</Card.Title>
                <Card.Text>
                    Matthew Marcoux L-ATC, CSAC –
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
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardDeck>
)







export default DividerExampleVertical