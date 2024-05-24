import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navv.css";

function Navv() {
  return (
    // className="navbarContainer"
    // <div style={{ backgroundColor: "#4186ef ",
    // padding: '0.5rem 0rem 0rem'
    // }}>
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarContainer"
      style={{
        // background: "rgba(44, 56, 167, 0.15)",
        // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        // borderRadius: '16px',
        // backdropFilter: "blur(5.1px)",
        // WebkitBackdropFilter: "blur(5.1px)",
        background: "#ebf8fc ",
        color: "white",
        width: "100%",
        margin: "auto",
        fontFamily: "Raleway, Arial, sans-serif",
      }}
    >
      <Container fluid className="navbarContainer">
        <Navbar.Brand href="/">
          <img
            src="/Index/logo.png"
            width="auto"
            height="42"
            className="d-inline-block align-top"
            alt="React"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <NavDropdown
              title={<span style={{ color: "black" }}>Language Solution</span>}
              id="basic-nav-dropdown"
              style={{ margin: "0 0.7rem" }}
            >
              <NavDropdown.Item href="/french">French</NavDropdown.Item>
              <NavDropdown.Item href="/spanish">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="/german">German</NavDropdown.Item>
              <NavDropdown.Item href="/russian">Russian</NavDropdown.Item>
              <NavDropdown.Item href="/english">English</NavDropdown.Item>
              <NavDropdown.Item href="/mandarin">Mandarin</NavDropdown.Item>
              <NavDropdown.Item href="/dutch">Dutch</NavDropdown.Item>
              <NavDropdown.Item href="/portuguese">Portuguese</NavDropdown.Item>
              <NavDropdown.Item href="/japanese">Japanese</NavDropdown.Item>
              <NavDropdown.Item href="/korean">Korean</NavDropdown.Item>
              <NavDropdown.Item href="/arabic">Arabic</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="/blogs"
              style={{ margin: "0 0.7rem", color: "black" }}
              className="navLinkNavbar"
            >
              Blogs
            </Nav.Link>
            <Nav.Link
              href="/meetthetutor"
              style={{ margin: "0 0.7rem", color: "black" }}
              className="navLinkNavbar"
            >
              Meet the Tutors
            </Nav.Link>
            <Nav.Link
              href="/aboutus"
              style={{ margin: "0 0.7rem", color: "black" }}
              className="navLinkNavbar"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/contactus"
              style={{ margin: "0 0.7rem", color: "black" }}
              className="navLinkNavbar"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link href="https://curiotory.com/login">           
            <button className="loginButton">Login</button>
              </Nav.Link>
              
          </Nav>
          <Navbar.Brand href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN">
            <img
              src="/Index/play.png"
              width="58"
              height="auto"
              className="d-inline-block align-top"
              alt="React"
              style={{ margin: "0 0.7rem" }}
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>

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
