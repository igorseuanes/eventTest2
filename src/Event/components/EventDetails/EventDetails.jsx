import React from 'react'
import { Col, Row } from 'reactstrap'
import "./EventDetails.css"
import { BsCalendarWeek } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'

function EventDetails() {
  return (
    <>
      <Row className='d-block'>
        <Col>
          <span className="eventTitle">Birthday Bash</span>
        </Col>
        <Col>
          <span className="hostName">
            Hosted by Elysia
          </span>
        </Col>
      </Row>
      <Row className="calendarRow w-100 pt-3">
        <Col className="col-2 d-flex justify-content-center align-items-center">
          <BsCalendarWeek className="calendarIcon" />
        </Col>
        <Col className="col-8">
          <span className="detailsDate">
            18 August 6:00PM
          </span>
          <br />
          <span className="detailsSubtitle">to <strong> 19 August 1:00PM</strong> UTC +10</span>
        </Col>
        <Col className="col-2 d-flex justify-content-center align-items-center">
          <MdArrowForwardIos />
        </Col>
      </Row>
      <Row className="calendarRow w-100 pt-3">
        <Col className="col-2 d-flex justify-content-center align-items-center">
          <GoLocation className="calendarIcon" />
        </Col>
        <Col className="col-8">
          <span className="detailsDate">
            Street Name
          </span>
          <br />
          <span className="detailsSubtitle">Suburb, State, Postcode</span>
        </Col>
        <Col className="col-2 d-flex justify-content-center align-items-center">
          <MdArrowForwardIos />
        </Col>
      </Row>
    </>
  )
}

export default EventDetails