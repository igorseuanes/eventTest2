import React from 'react';
import HeaderText from './Home/components/HeaderText/HeaderText';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap'
import { ReactComponent as HomeImage } from "./assets/images/LandingImage.svg"
import { Link, BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Event from './Event/Event';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>

  );
}

export default App;
