// import Footer from '../../components/Footer/Footer';
// import Navv from '../../components/Navv/Navv';
import './Download.css';
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

function Download() {
  return (
    <>
      <Newnavbar />
       <div className="enclosed" style={{flex: '7'}}>
      <h2 style={{marginLeft: '-8rem'}}>
        Download
 
        <span className="words words-1">
          <span style={{marginLeft: '1rem'}}>Our App</span>
          <span style={{marginLeft: '1rem'}}>Freely</span>
          <span style={{marginLeft: '1rem'}}>with Ease</span>
        </span>
      </h2>

      <br />
      <a style={{textDecoration: 'none'}} target="_blank" href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN">
        <button className="download" type="button" >
          <span className="button__text">Curiotory</span>
          <span className="button__icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              id="bdd05811-e15d-428c-bb53-8661459f9307"
              data-name="Layer 2"
              className="svg"
            >
              <path
                d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
              ></path>
              <path
                d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
              ></path>
              <path
                d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
              ></path></svg
          ></span>
        </button>
      </a>
    </div>
    <Footer2 />
    </>
  )
}

export default Download