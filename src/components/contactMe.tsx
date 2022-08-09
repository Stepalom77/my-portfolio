import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Contact: React.FC = () => {
    return(
        <Container fluid="true" id='contactInfo'>
            <Row xs={6} className="justify-content-md-center">
                <Col>
                <h2 className='align-content-center justify-content-md-center' id='headerText'>Contact Me</h2>
                </Col>
            </Row>
            <Row xs={6} className="justify-content-md-center">
            <Card style={{ width: '25rem', height: '20rem' }}>
      <Card.Body>
        <Card.Title>Contact Info</Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted">My email</Card.Subtitle>
        <Card.Text>
            stepalom22@gmail.com
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">My phone number</Card.Subtitle>
        <Card.Text>
            Mobile: (+51)980159005
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Social media</Card.Subtitle>
        <Card.Link href="https://github.com/Stepalom77" target="_blank">
             <Image src='/images/317712_code repository_github_repository_resource_icon.png' alt='github'/> 
             </Card.Link>
        <Card.Link href="https://www.instagram.com/stephanopalominomadueno/" target="_blank">
        <Image src='/images/5335781_camera_instagram_social media_instagram logo_icon.png' alt='instagram'/>
        </Card.Link>
        <Card.Link href='https://www.linkedin.com/in/stephanopalomino/' target="_blank">
        <Image src='/images/5305157_connection_linkedin_network_linkedin logo_icon.png' alt='linkedin'/>
        </Card.Link>
        <br/>
        <br/>
        <Button href="#" variant="outline-primary">Download my CV</Button>
      </Card.Body>
    </Card>
            </Row>
        </Container>
    )
}
export default Contact;