/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { cities } from "../../store/mocks/weatherMock";

const MyNavbar = ({ date, onChange }) => {

  return (
    <Container fluid className="bg-danger px-0 mx-0 ">
      <Navbar className="bg-body-tertiary">
        <Container>
          <div className="row d-flex justify-content-between w-100 align-content-center">
            <div className="col-6 d-flex align-content-center">
              <Navbar.Brand href="#">
                <h5 className="py-0 my-0 ">{date.current}</h5>
                <small className="py-0 my-0 ">{date.dateDetails}</small>
              </Navbar.Brand>
            </div>
            <div className="col-6 d-flex align-content-center flex-wrap">
              <Form.Select
                aria-label="Default select example"
                style={{ height: "40px" }}
                onChange={onChange}
              >
                <option value={''}>Choose a city...</option>
                {cities.map((city, i) => (
                  <option key={i} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
};

MyNavbar.propTypes = {
  date: {
    date: PropTypes.string,
    dateDetails: PropTypes.string,
    onChange: PropTypes.any
  },
};

export default MyNavbar;