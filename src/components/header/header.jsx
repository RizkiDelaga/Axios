import { Button, Col, Container, Row } from 'reactstrap';

function Header() {
  return (
    <>
      <Container className='bg-danger p-0'>
        <h1>Ini dari header</h1>
        <Button color="light" outline className='border border-3 ms-5'>Danger!</Button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio fugit quisquam, enim explicabo error in fugiat laboriosam dolorem itaque necessitatibus officiis assumenda unde nulla repudiandae, sunt ipsum quis placeat.</p>
      </Container>

      <Container fluid className='' color='dark'>
        <Row>
          <Col xl="2" lg="5" md="3">
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col xl="8" lg="2" md="6" className='bg-primary'>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt et explicabo nulla ullam laborum architecto. Excepturi provident reprehenderit ipsum enim qui necessitatibus esse voluptates, doloribus voluptatum eum quibusdam in.</p>
          </Col>
          <Col xl="2" lg="5" md="3">
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;