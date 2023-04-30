import logo from './logo.svg';
import './App.css';
import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap';
import {About} from '../src/components/About.js';
import { Experience } from './components/Experience';
import {Hobbies} from './components/Hobbies';
import {Contact} from './components/Contact';
// main page for jobs
function App() {
  const styles = {
    position: 'sticky',
    top: '0px',
    zIndex: 5
  };
  return (
    <div className="App">
      <Navbar bg="light" style={styles} >
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
        </Container>
        <Container>
          <Link to='about' smooth={true}><Navbar.Brand>About</Navbar.Brand></Link>
        </Container>
        <Container>
        <Link to='experience' smooth={true}><Navbar.Brand>Experience</Navbar.Brand></Link>
        </Container>
        <Container>
        <Link to='hobbies' smooth={true}><Navbar.Brand>Hobbies</Navbar.Brand></Link>
        </Container>
        <Container>
        <Link to='contact' smooth={true}><Navbar.Brand>Contact</Navbar.Brand></Link>
        </Container>
        <Container>
          <Navbar.Brand>Login</Navbar.Brand>
        </Container>
      </Navbar>
        <div>
        <Element name='about'><About></About></Element>
        <Element name="experience"><Experience></Experience></Element>
        <Element name='hobbies'><Hobbies></Hobbies></Element>
        <Element name='contact'><Contact></Contact></Element>
        </div>
    </div>
    
  );
}

export default App;
