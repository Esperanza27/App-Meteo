import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <Container  fluid className="bg-danger px-0 mx-0 ">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <h5 className="py-0 my-0 ">January 2024</h5>
            <small className="py-0 my-0 ">Friday, Jan 19, 2024</small>
          </Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
