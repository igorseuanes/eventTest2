import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BirthdayImage from './components/BirthdayImage'
import EventDetails from './components/EventDetails/EventDetails'
import "./Event.css"

function Event() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center p-0">
          <BirthdayImage />
        </Col>
        <Col className="pt-2">
          <EventDetails />
        </Col>
      </Row>
    </Container>
  )
}

export default Event