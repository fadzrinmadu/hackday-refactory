import './style.css';
import { Navbar, Container } from "react-bootstrap";

export default function Topbar() {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: '#2f1793' }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Books App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
