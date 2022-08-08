import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomeApp:  React.FC = () => {
    return(
        <div className="home">
            <Container id='homeContainer'>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto"> <Image id='myImage' roundedCircle={true} src="/images/yo.jpg" alt="Me" /></Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto"><p id='myName'>Stephano Carlo Palomino Madueño</p></Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto"><p id='myName'>Backend Developer</p></Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
        </div>
    )
}
export default HomeApp;