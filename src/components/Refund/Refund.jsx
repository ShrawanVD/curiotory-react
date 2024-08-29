// import Footer from '../Footer/Footer'
// import Navv from '../Navv/Navv'
import refundcss from './Refund.module.css';
import Newnavbar from '../NewNavbar/Newnavbar';
import Footer2 from '../Footer/Footer2';
import { useEffect } from "react";

function Refund() {
  useEffect(() => {
    addGTM();
  }, []);
  const addGTM = () => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SXJ40ZYWNV');
    `;
    document.head.appendChild(script2);
  };
  return (
    <div>
        <Newnavbar />
        <div className={refundcss.continerBackground}>
    <div className={refundcss.container}>
      <div className={refundcss.row}>
        <div className={refundcss.col}>
          {/* <!-- Empty column to maintain spacing --> */}
        </div>
        <div className={`${refundcss.policy} ${refundcss.colLg8}`}>
          <div className={refundcss.policyHeader}>
            <h2>Refund Policy</h2>
          </div>
          <div className={refundcss.policyContent}>
            <h5>Cancellation and Refund Policy :-</h5>
            <ul>
              <li>
                You are eligible for refund for all our LIVE and Recorded
                Courses within the 4 days of purchase.
              </li>
              <li>
                If you wish to cancel a course, then a refund request email
                has to be sent to support@curiotory.com from your registered
                email ID with all the student details including Name, School,
                Class, Phone number, bank details for crediting the fees and
                the course you wish to cancel. A Refund Request will be deemed
                valid only if the refund request email is sent within 4 days
                of course purchase. Any request made from any other email id
                for cancellation or refund will not be entertained.
              </li>
              <li>
                For the LIVE and our Mentored Learning Program the course
                materials need to be returned. The books and materials should
                be returned in the same condition as delivered by the Company.
                Any products returned showing signs of any use or damage in
                any manner shall not be accepted for return.
              </li>
              <li>
                For the LIVE and our Mentored Learning Program the course
                materials need to be returned. The books and materials should
                be returned in the same condition as delivered by the Company.
                Any products returned showing signs of any use or damage in
                any manner shall not be accepted for return.
              </li>
              <li>
                No Refund will be provided if the refund request email is sent
                after 4 days of course purchase.
              </li>
              <li>
                For LIVE and Mentored Learning Program after we receive the
                materials, we will deactivate the course and the refunds shall
                be processed and made to bank account within 15 working days
                of receipt of products.
              </li>
            </ul>
          </div>
          <div className={refundcss.policyContent}>
            <h5>Policy for NDNC :-</h5>
            <ul>
              <li>
                By using the website and/or registering yourself at
                www.qurocity.ai, you authorize us to contact you via email
                or phone call or sms and offer you our services, imparting
                product knowledge, offer promotional offers running on website
                & offers offered by the associated third parties, for which
                reasons, personally identifiable information may be collected.
                And irrespective of the fact if also you have registered
                yourself under DND or DNC or NCPR service, you still authorize
                us to give you a call from Qurocity Pvt Ltd for the above
                mentioned purposes till 365 days of your registration with us.
                Qurocity collects personally identifiable information when
                you register for a Qurocity account, when you use certain
                Qurocity products or services, when you visit Qurocity
                pages, and when you enter promotions. When you register with
                Qurocity, we ask for your first name, last name, contact no,
                email, Date of birth and gender. Once you register with
                Qurocity and sign in to our services, you are not anonymous
                to us. Also during registration, you may be requested to
                register your mobile phone and email id, pager, or other
                device to receive text messages, notifications, and other
                services to your wireless device. By registration you
                authorize us to send sms/email alerts to you for your login
                details and any other service requirements or some advertising
                messages/emails from us.
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          {/* <!-- Empty column to maintain spacing --> */}
        </div>
      </div>
    </div>
  </div>
  <Footer2 />
    </div>
  )
}

export default Refund