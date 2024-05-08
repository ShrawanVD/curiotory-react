import { Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus/Aboutus';
import Contact from './pages/Contactus/Contact';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Singleblog from './pages/Singleblog/Singleblog';
import Teacherform from './pages/Teacherform/Teacherform';
import Tutor from './pages/Meettutor/Meettutor';
import Download from './pages/Download/Download';
import Refund from './components/Refund/Refund';
import Privacy from './components/PrivacyPolicy/PrivacyPolicy';
import Terms from'./components/TermsNCond/TermsNCond';
import Arabic from './components/Languages/Arabic/Arabic';
import Dutch from './components/Languages/Dutch/Dutch';
import English from './components/Languages/English/English';
import French from './components/Languages/French/French';
import German from './components/Languages/German/German';
import Japanese from './components/Languages/Japanese/Japanese';
import Korean from './components/Languages/Korean/Korean';
import Mandarin from './components/Languages/Mandarin/Mandarin';
import Portuguese from './components/Languages/Portuguese/Portuguese';
import Russian from './components/Languages/Russian/Russian';
import Spanish from './components/Languages/Spanish/Spanish';
import Becometutor from './pages/Becometutor/Becometutor';

export default (
    <Routes>
        <Route index element={<Home/>} />
        <Route path="/About" element={<Aboutus/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/BlogsId" element={<Singleblog/>} />
        <Route path="/MeetTheTutor" element={<Tutor/>} />
        <Route path="/Refund" element={<Refund/>} />
        <Route path="/Privacy" element={<Privacy/>} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Becometutor" element={<Becometutor />} />
        <Route path="/TeacherForm" element={<Teacherform />} />
        <Route path="/Download" element={<Download />} />
        
        {/* Languages pages routing */}
        <Route path="/Arabic" element={<Arabic />} />
        <Route path="/Dutch" element={<Dutch />} />
        <Route path="/English" element={<English />} />
        <Route path="/French" element={<French />} />
        <Route path="/German" element={<German />} />
        <Route path="/Japanese" element={<Japanese />} />
        <Route path="/Korean" element={<Korean />} />
        <Route path="/Mandarin" element={<Mandarin />} />
        <Route path="/Portuguese" element={<Portuguese />} />
        <Route path="/Russian" element={<Russian />} />
        <Route path="/Spanish" element={<Spanish />} />
    </Routes>
);