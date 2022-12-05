import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Projects: React.FC = () => {
  return (
    <Container fluid id='projects'>
        <Row className="justify-content-md-center">
            <Col className='text-center' xs={6}>
            <p id='projectTitle'>All my Project were constructed to test and learn different frameworks and tools.</p>
            </Col>
        </Row>
        <Row >
        <Col>
    <Card  style={{ width: '25rem', height: '19rem' }}>
      <Card.Body>
        <Card.Title>Start Legal </Card.Title>
        <Card.Text id='projectText'>
            The new Web App of my Legaltech Startup, Start Legal, the project is still underway but you can watch the current state, I am using Angular and NestJS. 
            The purpose of this project is to rebuilt the current Web App of my Start Legal with a much modern tech stack, which will make it easier 
            to add more features and improve the product. P.S.: The repositories are private but I can show it if needed.
        </Card.Text>
        <Card.Text id='projectText'>
            All the tools I am currently using: NestJS, Angular, Typescript, Bootstrap, SQL, Sendgrind, Railway and Vercel.
        </Card.Text>
        <Button id='buttonRight' href="https://start-legal-32gpsjpw6-stepalom77.vercel.app/" target="_blank" variant="outline-primary">Live Demo</Button>
      </Card.Body>
  </Card>
            </Col>
        <Col>
        <Card style={{ width: '27rem', height: '19rem' }}>
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
            <Card style={{ width: '27rem', height: '18rem' }}>
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
        <Card id='cardBottom' style={{ width: '27rem', height: '22rem' }}>
      <Card.Body>
        <Card.Title>Youtube Clone</Card.Title>
        <Card.Text id='projectText'>
            Building a clone of the Youtube API with a simple Frontend to test the GET Requests.
            My purpose with this project was to perfect my skills with No SQL databases and Typescript by building a clone of the API
            of a webpage that I used everyday.
        </Card.Text>
        <Card.Text id='projectText'>
            All the tools I used for the Backend: Typescript/NodeJS, Express, Mongoose, MongoDB, Railway, Postman and Auth0.
            All the tools I used for the Frontend: Typescript/NodeJS, React, TailwindCSS, Axios, Render and Auth0.
        </Card.Text>
        <Button href="https://github.com/Stepalom77/youtube_clone" target="_blank" variant="outline-primary">Backend Github repository</Button>
        <Button id='buttonRight' href="https://documenter.getpostman.com/view/17975789/2s7YfSdD9A" target="_blank" variant="outline-primary">API Documentation</Button>
        <Button id='buttonBackend' href="https://github.com/Stepalom77/youtube_clone_app" target="_blank" variant="outline-primary">Frontend Github repository</Button>
        <Button id='buttonFrontend' href="https://youtube-clone-app.onrender.com/" target="_blank" variant="outline-primary">Live Frontend</Button>
      </Card.Body>
  </Card>
            </Col>
        </Row>
    </Container>
    
  );
}

export default Projects;