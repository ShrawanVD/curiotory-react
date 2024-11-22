import { Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus/Aboutus';
import Contact from './pages/Contactus/Contact';
// import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Singleblog from './pages/Singleblog/Singleblog';
import BlogRedirect from './components/BlogRedirect/BlogRedirect';
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
import Life from './pages/LifeAtQurocity/life';
import Account from './pages/AccountDeletion/account';

import Press from './pages/Press/press';
import Presssignle from './pages/PressSingle/presssignle'
import Popup from './components/Popup/Popup'
import CounsellingForm from  './components/CounsellingForm/CounsellingForm'


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
import InquiryForm from './pages/InquiryForm/InquiryForm';
import OneSession from './pages/OneSession/OneSession';
import ReviewSession from './components/ReviewSession/ReviewSession';
import Thankyou from './pages/Thankyou/Thankyou';
import DownloadMarkettingLeads from './pages/DownloadMarkettingLeads/DownloadMarkettingLeads';


export default (
    <Routes>
        <Route index element={<Newcover/>} />
        <Route path="/one-on-one-session" element={<OneSession/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/blogs" element={<Blogs/>} />
        {/* <Route path="/blogs/:urlTitle-:id" element={<Singleblog />} /> */}
        <Route path="/blogs/:slug" element={<Singleblog />} />
        <Route path="/blogsId" element={<BlogRedirect />} />

        <Route path="/press/:slug" element={<Presssignle />} />
        <Route path="/press" element={<Press />} />

        {/* <Route path="/blogsId" element={<Singleblog/>} /> */}
        <Route path="/meetthetutor" element={<Tutor/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/becometutor" element={<Becometutor />} />
        <Route path="/download" element={<Download />} />
        <Route path="/checkout/:id" element={<CheckoutPg />} />
        <Route path="/life" element={<Life />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/details/:id" element={<Jobdetails />} />
        <Route path="/rev" element={<Rev />} />
        <Route path="/account-deletion" element={<Account />} />

        <Route path="/popup" element={<Popup />} />
        <Route path="/CounsellingForm" element={<CounsellingForm />} />
        <Route path="/inquiry" element={<InquiryForm />} />
        <Route path="/download-leads" element={<DownloadMarkettingLeads />} />
        
        {/* Languages pages routing */}
        <Route path="/learnarabic" element={<Arabic />} />
        <Route path="/learndutch" element={<Dutch />} />
        <Route path="/learnenglish" element={<English />} />
        <Route path="/learnfrench" element={<French />} />
        <Route path="/learngerman" element={<German />} />
        <Route path="/learnjapanese" element={<Japanese />} />
        <Route path="/learnkorean" element={<Korean />} />
        <Route path="/learnmandarin" element={<Mandarin />} />
        <Route path="/learnportuguese" element={<Portuguese />} />
        <Route path="/learnrussian" element={<Russian />} />
        <Route path="/learnspanish" element={<Spanish />} />
        <Route path="/learndanish" element={<Danish />} />

        {/* courses routing */}
        <Route path="/course/english" element={<EnglishCourse />} />
        <Route path="/course/japanese" element={<JapaneseCourse />} />
        <Route path="/course/mandarin" element={<MandarinCourse />} />
        <Route path="/course/korean" element={<KoreanCourse />} />
        <Route path="/course/french" element={<FrenchCourse />} />
        <Route path="/course/spanish" element={<SpanishCourse />} />
        <Route path="/course/german" element={<GermanCourse />} />
        <Route path="/review" element={<Reviewcourse />} />
        <Route path="/reviewsession" element={<ReviewSession />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/underDevelopment" element={<NotFoundDev />} />
        <Route path="/thankyou" element={<Thankyou />} />





    </Routes>
);