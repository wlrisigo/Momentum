/* eslint-disable max-len */

import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const ContainerExampleText = (props) => (
    <div className="Team">
    <Container text>
        <Header as='h2'>{props.name}</Header>
        <Header as='h3'>Description</Header>
        <div className="description">
        <p> {props.description} </p>
        </div>
    </Container>
    </div>
)

export default ContainerExampleText