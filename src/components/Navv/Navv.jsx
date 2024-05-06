import Logo from "../../assets/Index/logo.png";
import Play from "../../assets/Index/play.png";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navv() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="80%"
            height="30"
            className="d-inline-block align-top"
            alt="React"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <NavDropdown title="Language Solution" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">German</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Russian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Mandarin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Dutch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Portuguese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Japanese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">Korean</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">Arabic</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Blogs</Nav.Link>
            <Nav.Link href="#link">Meet the Tutors</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">
            <img
              src={Play}
              width="50"
              height="20"
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
