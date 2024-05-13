import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navv.css";

function Covernav() {
  return (
     // className="navbarContainer"
    // <div style={{ backgroundColor: "#4186ef ",
    // padding: '0.5rem 0rem 0rem'
    // }}>
    <>
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarContainer"
      style={{
        // background: "rgba(44, 56, 167, 0.15)",
        // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        // borderRadius: '16px',
        // backdropFilter: "blur(5.1px)",
        // WebkitBackdropFilter: "blur(5.1px)",
        background: "#4186ef ",
        color: "white",
        width: "100%",
        margin: "auto",
        fontFamily: "Raleway, Arial, sans-serif",
      }}
    >
      <Container fluid className="navbarContainer">
        <Navbar.Brand href="/">
          <img
            src="/Index/curiotoryWhite.png"
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
              title={<span style={{ color: "white" }}>Language Solution</span>}
              id="basic-nav-dropdown"
              style={{ color: "black", margin: "0 0.7rem" }}
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
              style={{ margin: "0 0.7rem", color: "#f1f1f1" }}
              className="navLinkNavbar"
            >
              Blogs
            </Nav.Link>
            <Nav.Link
              href="/meetthetutor"
              style={{ margin: "0 0.7rem", color: "#f1f1f1" }}
              className="navLinkNavbar"
            >
              Meet the Tutors
            </Nav.Link>
            <Nav.Link
              href="/aboutus"
              style={{ margin: "0 0.7rem", color: "#f1f1f1" }}
              className="navLinkNavbar"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/contactus"
              style={{ margin: "0 0.7rem", color: "#f1f1f1" }}
              className="navLinkNavbar"
            >
              Contact Us
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
    </>
  )
}

export default Covernav