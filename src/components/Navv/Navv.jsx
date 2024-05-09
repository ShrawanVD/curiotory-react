import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './Navv.css';

function Navv() {


  return (
    // className="navbarContainer"
    <Navbar expand="lg" className="bg-body-tertiary navbarContainer" style={{backgroundColor: '#EBFAFF',color: 'black',width: '100%', margin: 'auto', padding: '7px 30px 2px' }}>
      <Container fluid className="navbarContainer">
        <Navbar.Brand href="/">
          <img
            src="/Index/logo.png"
            width="auto"
            height="40"
            className="d-inline-block align-top"
            alt="React"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <NavDropdown title="Language Solution" id="basic-nav-dropdown">
              <NavDropdown.Item href="/French">French</NavDropdown.Item>
              <NavDropdown.Item href="/Spanish">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="/German">German</NavDropdown.Item>
              <NavDropdown.Item href="/Russian">Russian</NavDropdown.Item>
              <NavDropdown.Item href="/English">English</NavDropdown.Item>
              <NavDropdown.Item href="Mandarin">Mandarin</NavDropdown.Item>
              <NavDropdown.Item href="/Dutch">Dutch</NavDropdown.Item>
              <NavDropdown.Item href="/Portuguese">Portuguese</NavDropdown.Item>
              <NavDropdown.Item href="/Japanese">Japanese</NavDropdown.Item>
              <NavDropdown.Item href="/Korean">Korean</NavDropdown.Item>
              <NavDropdown.Item href="Arabic">Arabic</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/Blogs">Blogs</Nav.Link>
            <Nav.Link href="/MeetTheTutor">Meet the Tutors</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
          </Nav>
          <Navbar.Brand href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN">
            <img
              src="/Index/play.png"
              width="45"
              height="auto"
              className="d-inline-block align-top"
              alt="React"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={Logo}
    //         width="90%"
    //         height="30"
    //         className="d-inline-block align-top"
    //         alt="React"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <NavDropdown title="Language Solution" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Separated <link rel="stylesheet" href="" /></NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#home">Blogs</Nav.Link>
    //         <Nav.Link href="#link">Meet the Tutors</Nav.Link>
    //         <Nav.Link href="#link">About Us</Nav.Link>
    //         <Nav.Link href="#link">Contact Us</Nav.Link>

    //         <Navbar.Brand href="#home">
    //           <img
    //             src={Play}
    //             width="50"
    //             height="20"
    //             className="d-inline-block align-top"
    //             alt="React"
    //           />
    //         </Navbar.Brand>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Navv;
