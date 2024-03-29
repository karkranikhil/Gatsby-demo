import React from "react"
import MainLayout from '../layouts/MainLayout'
import { Form, Button } from "react-bootstrap"
export default () => (
    <MainLayout column="col-12 col-md-8 col-lg-6">
                    <div>
                <h1>Contact Us</h1>
                <Form>
                    <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email..." />
                    </Form.Group>
                    <Form.Group controlId="contactForm.Subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject..." />
                    </Form.Group>
                    <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>
                </div>
                </MainLayout>
            
)

