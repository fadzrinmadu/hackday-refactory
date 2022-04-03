import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowCounterclockwise } from 'react-bootstrap-icons';
import Topbar from "../components/Topbar";
import BookFormAdd from '../components/BookFormAdd';

export default function AddBookForm() {
  return (
    <>
      <Topbar />
      <Container>
        <Row className="pt-5 pb-3">
          <Col className="d-flex justify-content-between">
            <h3>Form Add New Book</h3>
            <Link to="/" className="btn btn-dark">
              <ArrowCounterclockwise />
              <span>Back</span>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <BookFormAdd />
          </Col>
        </Row>
      </Container>
    </>
  );
}
