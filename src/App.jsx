import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
// import Footer from "./components/Footer/Footer";
// import Navv from "./components/Navv/Navv";
// import Home from "./pages/Home/Home"


const App = () => {
  return (
    
     <>
     {/* <Navv/>
     <Home/>
     <Footer/> */}
     <BrowserRouter>
      {Routing}
     </BrowserRouter>
     </>
      
  );
};

export default App