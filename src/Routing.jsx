import { Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus/Aboutus';
import Contact from './pages/Contactus/Contact';
// import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Singleblog from './pages/Singleblog/Singleblog';
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
import Danish from './components/Languages/Danish/Danish';
import Becometutor from './pages/Becometutor/Becometutor';
import CheckoutPg from './components/CheckoutSection/CheckoutPg';

// courses 
import EnglishCourse from './pages/CourseDetailsPage/EnglishCourse/EnglishCourse';
import JapaneseCourse from './pages/CourseDetailsPage/JapaneseCourse/JapaneseCourse';
import MandarinCourse from './pages/CourseDetailsPage/MandarinCourse/MandarinCourse';
import KoreanCourse from './pages/CourseDetailsPage/KoreanCourse/KoreanCourse';
import FrenchCourse from './pages/CourseDetailsPage/FrenchCourse/FrenchCourse';
import SpanishCourse from './pages/CourseDetailsPage/SpanishCourse/SpanishCourse';
import GermanCourse from './pages/CourseDetailsPage/GermanCourse/GermanCourse';
import Newcover from './pages/NewCoverPage/Newcover';
import Reviewcourse from './components/Reviewcourse/Reviewcourse';
import Careers from './components/Careers/Careers';

import Rev from './components/LanguagesReviews/Rev';
import Jobdetails from './components/Jobdetails/Jobdetails';
import NotFound from './pages/NotFound/NotFound';
import NotFoundDev from './pages/NotFound/NotFoundDev';


export default (
    <Routes>
        <Route index element={<Newcover/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogsId" element={<Singleblog/>} />
        <Route path="/meetthetutor" element={<Tutor/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/becometutor" element={<Becometutor />} />
        <Route path="/download" element={<Download />} />
        <Route path="/checkout/:id" element={<CheckoutPg />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/details/:id" element={<Jobdetails />} />
        <Route path="/rev" element={<Rev />} />
        
        {/* Languages pages routing */}
        <Route path="/arabic" element={<Arabic />} />
        <Route path="/dutch" element={<Dutch />} />
        <Route path="/english" element={<English />} />
        <Route path="/french" element={<French />} />
        <Route path="/german" element={<German />} />
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/korean" element={<Korean />} />
        <Route path="/mandarin" element={<Mandarin />} />
        <Route path="/portuguese" element={<Portuguese />} />
        <Route path="/russian" element={<Russian />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/danish" element={<Danish />} />

        {/* courses routing */}
        <Route path="/course/english" element={<EnglishCourse />} />
        <Route path="/course/japanese" element={<JapaneseCourse />} />
        <Route path="/course/mandarin" element={<MandarinCourse />} />
        <Route path="/course/korean" element={<KoreanCourse />} />
        <Route path="/course/french" element={<FrenchCourse />} />
        <Route path="/course/spanish" element={<SpanishCourse />} />
        <Route path="/course/german" element={<GermanCourse />} />
        <Route path="/review" element={<Reviewcourse />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/underDevelopment" element={<NotFoundDev />} />





    </Routes>
);