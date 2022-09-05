import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Projects: React.FC = () => {
  return (
    <Container className="justify-content-md-around" fluid="true" id='projects'>
        <Row className="justify-content-md-center">
            <Col xs={6}>
            <p id='projectTitle'>All my Project were constructed to test and learn different frameworks and tools.</p>
            </Col>
        </Row>
        <Row className="justify-content-md-around">
        <Col>
        <Card style={{ width: '25rem', height: '19rem' }}>
      <Card.Body>
        <Card.Title>IMDB API</Card.Title>
        <Card.Text id='projectText'>
            Building a clone of the Internet Movie Database API with NodeJS, Express and Docker deployed in a Linux VM of Google Cloud Services.
            My purpose with this project was to learn how to use the VM of GCS and perfect my skills with Express, SQL and Sequelize by building a clone of the API
            of a webpage that I enjoy using.
        </Card.Text>
        <Card.Text id='projectText'>
            All the tools I used: Javascript/NodeJS, Express, Sequelize, Postgres, Docker, Google Cloud Services, Ubuntu, Nginx and JWT.
        </Card.Text>
        <Button href="https://github.com/Stepalom77/IMDB-Clone-API" target="_blank" variant="outline-primary">Github repository</Button>
        <Button id='buttonRight' href="https://www.imdb-api-clone.xyz/api/v1/api-docs/" target="_blank" variant="outline-primary">API Live Documentation</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '25rem', height: '18rem' }}>
      <Card.Body>
        <Card.Title>Best Buy API</Card.Title>
        <Card.Text id='projectText'>
            Building a clone of the Best Buy API with NodeJS, Express and Docker deployed in a Linux VM of Microsoft Azure.
            My purpose with this project was to perfect my skills with Devops tools, I wanted to know, how many tools I could
            use to deploy an API and in how many environment I could use Docker containers.
        </Card.Text>
        <Card.Text id='projectText'>
            All the tools I used: Javascript/NodeJS, Express, Sequelize, MySQL, Docker, Microsoft Azure, Nginx, Ubuntu, JWT, Oauth2.
        </Card.Text>
        <Button href="https://github.com/Stepalom77/Best_buy_api_clone" target="_blank" variant="outline-primary">Github repository</Button>
        <Button id='buttonRight' href="https://www.palomino-bestbuyclone-proyect.xyz/" target="_blank" variant="outline-primary">Live Demo</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
        <Row className="justify-content-md-around">
        <Col>
        {/*<Card id='cardBottom' style={{ width: '25rem', height: '17rem' }}>
      <Card.Body>
        <Card.Title>Youtube API</Card.Title>
        <Card.Text id='projectText'>
            Building a clone of the Youtube API with Typescript, Mongoose and MongoDB, deployed with Heroku.
            My purpose with this project was to perfect my skills with No SQL databases and Typescript by building a clone of the API
            of a webpage that I used everyday.
        </Card.Text>
        <Card.Text id='projectText'>
            All the tools I used: Typescript/NodeJS, Express, Mongoose, MongoDB, Heroku and Auth0.
        </Card.Text>
        <Button href="https://github.com/Stepalom77/youtube_clone" target="_blank" variant="outline-primary">Github repository</Button>
        <Button id='buttonRight' href="#" target="_blank" variant="outline-primary">Live Demo</Button>
      </Card.Body>
  </Card>*/}
            </Col>
            <Col>
    {/*<Card id='cardBottom' style={{ width: '25rem', height: '17rem' }}>
      <Card.Body>
        <Card.Title>Start Legal API</Card.Title>
        <Card.Text id='projectText'>
            Rebuilding the API of my Legaltech startup, Start Legal, with Python and SQL. The purpose of this project
            was to rebuilt the API of my startup to test if it's functionally would be better with these tools instead 
            of the ones we are currently using. I also wanted to learn how to use Python and Django.
        </Card.Text>
        <Card.Text id='projectText'>
            All the tools I used: Python, Django, Postgres and Firebase.
        </Card.Text>
        <Button href="#" target="_blank" variant="outline-primary">Github repository</Button>
        <Button id='buttonRight' href="#" target="_blank" variant="outline-primary">Live Demo</Button>
      </Card.Body>
  </Card>*/}
            </Col>
        </Row>
    </Container>
    
  );
}

export default Projects;