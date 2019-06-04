import React from 'react'
import { Grid, Image, Header,Container } from 'semantic-ui-react'
import well from "../Images/Well.jpg"
import perf from "../Images/KatePerform.png"
import rec from "../Images/Recovery.png"

const GridExampleDividedNumber = () => (
    <Grid columns={3}>
        <Grid.Row >
            <Grid.Column>
                <Header as='h1' className="H2">Performance</Header>
                <Image src={perf}  />
            </Grid.Column>

            <Grid.Column>
                <Header as='h1' className="H2">Wellness</Header>
                <Image src={well} />
            </Grid.Column>
            <Grid.Column>
                <Header as='h1' className="H2">Recovery</Header>
                <Image src={rec} />
            </Grid.Column>
        </Grid.Row>

    </Grid>
)

export default GridExampleDividedNumber