import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './HeaderText.css'

function HeaderText() {
  return (
    <>
      <Row className="d-block pb-3">
        <Col className="d-flex justify-content-center">
          <span className="headerBlackLines">Imagine if</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span className="secondLine">Snapchat</span>
        </Col>
        <Col className="d-flex justify-content-center">
          <span className="headerBlackLines">had events.</span>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <span className="subtitle">
            Easily host and share events with your <br /> friends across any social media.
          </span>
        </Col>
      </Row>
    </>
  )
}

export default HeaderText
