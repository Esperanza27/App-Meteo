import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function MyCard() {
  return (
    <Container fluid className="px-0 mx-0">
      {/*  <Card style={{ width: '18rem' }}>
      <Card.Img src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
         
        </Card.Text>
      </Card.Body>
    </Card> */}
      <div className="d-flex gap-5 bg-danger" /* style={{ width: "300px" }} */>
         <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            className="bi bi-wind"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
          </svg>
            </div>
        <div>
          <div>Wind Spped</div>
          <div>21.8 km/h</div>
        </div>
        <div>27 km/h</div>
        </div>
      </Container>
    
  );
}

export default MyCard;
