import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomeApp:  React.FC = () => {
    return(
    <Container fluid="true" id='homeContainer'>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto"> 
        <Image className='align-content-center justify-content-md-center' id='myImage' roundedCircle={true} src="/images/yo.jpg" alt="Me" />
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <p className='align-content-center justify-content-md-center' id='myName'>Stephano Carlo Palomino Madueño</p>
          </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <p className='align-content-center justify-content-md-center' id='myName'>Backend Developer</p>
          </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
    )
}
export default HomeApp;