import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormExampleCaptureValues extends Component {
    state = {firstName: '', lastName: '', email: '', question: '', subFirstName: '', subLastName: '', subEmail: '', subQuestion: ''}

    handleChange = (e, { name, value }) => this.setState({ [name]: value })


    handleSubmit = () => {
        const { firstName, lastName, email, question } = this.state

        this.setState({ subFirstName: firstName, subLastName: lastName,subEmail: email, subQuestion: question })
        this.sendFeedback(
            'momentum',
            this.subEmail,
            this.subEmail,
            this.state.feedback)

    }

    sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
        window.emailjs.send(
            'mailgun',
            templateId,
            {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
                this.setState({ formEmailSent: true })
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

    render() {
        const { firstName, lastName, email, question, subFirstName, subLastName, subEmail, subQuestion } = this.state

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder='First Name' name='firstName' onChange={this.handleChange}
                        value={firstName}
                        label="First Name"/>
                        <Form.Input placeholder='Last Name' name='lastName' onChange={this.handleChange}
                        value={lastName}
                                    label="Last Name"/>
                        <Form.Input
                            placeholder='Email'
                            label='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.TextArea
                        placeholder='Question'
                        label='Question'
                        name='question'
                        value={question}
                        onChange={this.handleChange}
                    />
                    <Form.Button content='Submit' />
                </Form>
                <strong>onChange:</strong>
                <pre>{JSON.stringify({ firstName, email }, null, 2)}</pre>
                <strong>onSubmit:</strong>
                <pre>{JSON.stringify({ subFirstName, subLastName, subEmail}, null, 2)}</pre>
            </div>
        )
    }
}

export default FormExampleCaptureValues