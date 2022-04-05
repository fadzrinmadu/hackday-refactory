import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Plus } from 'react-bootstrap-icons';
import Topbar from '../components/Topbar';
import BookTable from '../components/BookTable';

export default function Home(): React.ReactElement {
  return (
    <>
      <Topbar />
      <Container>
        <Row className="pt-5 pb-3">
          <Col className="d-flex justify-content-between">
            <h3>Book Lists</h3>
            <Link to="/add" className="btn btn-dark">
              <Plus />
              <span>Add New</span>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <BookTable />
          </Col>
        </Row>
      </Container>
    </>
  );
}
