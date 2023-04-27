import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap';
import {About} from '../src/components/About.js';
import { Experience } from './components/Experience';
import {Hobbies} from './components/Hobbies';
import {Contact} from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand>About</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand>Experience</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand>Hobbies</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand>Contact</Navbar.Brand>
        </Container>
      </Navbar>
      <About></About>
      <Experience></Experience>
      <Hobbies></Hobbies>
      <Contact></Contact>
    </div>
  );
}

export default App;
