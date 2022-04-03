import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowCounterclockwise } from 'react-bootstrap-icons';
import Topbar from "../components/Topbar";
import BookFormEdit from '../components/BookFormEdit';

export default function EditBookForm() {
  return (
    <>
      <Topbar />
      <Container>
        <Row className="pt-5 pb-3">
          <Col className="d-flex justify-content-between">
            <h3>Form Edit Book</h3>
            <Link to="/" className="btn btn-dark">
              <ArrowCounterclockwise />
              <span>Back</span>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <BookFormEdit />
          </Col>
        </Row>
      </Container>
    </>
  );
}
