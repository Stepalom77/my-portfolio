import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About: React.FC = () => {
    return (
            <Container className='aboutMe' fluid="true">
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col xs={6}>
          <p className='hi' id='aboutName'>Hi!</p>
          <p id='aboutName'>My name is Stephano Palomino</p>
          </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row className="justify-content-md-around">
        <Col xs={5}><p id='aboutText'>I am a Lawyer, Legaltech entrepreneur and a FullStack Developer with experience in developing legaltech products and building web applications.
          I love working on, investigating and developing solutions to make legal services much more human centric and more efficient.
          I have been able to adapt and learn new skills, even those that were out of my comfort zone, so I could get better as a Legaltech Entrepreneur,
          even as far as to go from been a Lawyer to learning how to code and becoming a Fullstack Developer. I love learning new programming languages, frameworks and tools, and 
          working on backend and cloud infrastructures. I also enjoy discussing new startups ideas and ways to solve problems. 
           </p></Col>
        <Col xs={4}>
        <Image id='myImage' src="/images/IMG_5344.jpg" alt="AnotherMe" />
        </Col>
      </Row>
    </Container>
    )
}
export default About;