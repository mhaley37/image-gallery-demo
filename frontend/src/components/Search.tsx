import { Container, Row, Col, Form, Button } from 'react-bootstrap';

type SearchProps = {
  handleSubmit: any;
  word?: string;
  setWord: any;
};

export const Search = ({ handleSubmit, word = '', setWord }: SearchProps) => {
  return (
    <Container className="mt-43">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search!
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
