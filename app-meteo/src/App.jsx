import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {Home} from './pages/home/Home'
import Container from "react-bootstrap/esm/Container";

function App() {
  

  return (
    <>
   <Container fluid className="bg-success px-0" >
     <Home />
   </Container>
   
    </>
  )
}

export default App
