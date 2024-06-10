import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
// App.js or Home.js
import './scrollbar.css';


const App = () => {
  return (
    
     <>
     <BrowserRouter>
      {Routing}
     </BrowserRouter>
     </>
      
  );
};

export default App