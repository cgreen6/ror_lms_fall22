import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => (
  <Container>
    <h1 className='text-center'>Our Instructors</h1>
    <Row>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1612633201772-9a8f3df6bbf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwdGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" />
          <Card.Body>
            <Card.Title>Ricky Bobby</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGVhZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" />
          <Card.Body>
            <Card.Title>Jennifer Harwood</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" />
          <Card.Body>
            <Card.Title>Robert Talisman</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60" />
          <Card.Body>
            <Card.Title>Amanda Tawn</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default Team;