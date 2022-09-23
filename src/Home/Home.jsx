import React, { useState } from 'react';
import './Home.css';
import HeaderText from './components/HeaderText/HeaderText';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { ReactComponent as HomeImage } from "../assets/images/LandingImage.svg"
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [eventName, setEventName] = useState('')

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const onChangeInputName = (event) => {
    event.preventDefault();
    setEventName(event.target.value)
  }

  return (
    <>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader>
          Create Event
        </ModalHeader>
        <ModalBody>
          <Input placeholder="Event name" onChange={onChangeInputName} />
          <Input type="date" placeholder="Date" />
          <Input type="search" placeholder="Location" />
          <Link to="/event">
            <Button>
              Next
            </Button>
          </Link>
        </ModalBody>
      </Modal>
      <Container className="appContainer">
        <Row style={{ background: '#DDDDDD' }} className="h-100">
          <Col>
            <Card style={{ border: 0 }} className="mt-5">
              <CardHeader style={{ background: '#DDDDDD', border: 0 }}>
                <HeaderText />
              </CardHeader>
              <CardBody style={{ background: '#DDDDDD' }} className="d-flex justify-content-center">
                <HomeImage className="homeImage" />
              </CardBody>
              <CardFooter style={{ background: '#DDDDDD', border: 0 }} className="d-flex justify-content-center pt-2">
                <Button className="createEventButton" onClick={toggleModal}>
                  🎉 Create my event
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
