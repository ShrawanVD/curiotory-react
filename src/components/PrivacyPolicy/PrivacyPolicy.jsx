// import Footer from '../Footer/Footer'
// import Navv from '../Navv/Navv'
import ppcss from "./PrivacyPolicy.module.css";
import Newnavbar from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  useEffect(() => {
    addGTM();
  }, []);
  const addGTM = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
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
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDFXMX24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Helmet>
        <link rel="canonical" href="https://qurocity.ai/privacy" />
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
      </Helmet>
      <Newnavbar />
      <div className={ppcss.continerBackground}>
        <div className={ppcss.container}>
          <div className={ppcss.row}>
            <div className={ppcss.col}></div>
            <div className={`${ppcss.policy} ${ppcss.colLg8}`}>
              <div className={ppcss.policyHeader}>
                <h2>Privacy Policy</h2>
              </div>
              <div className={ppcss.policyContent}>
                <p>
                  Chalkbord Academy Pvt Ltd. (“Qurocity” or “We”) is a private
                  limited company incorporated under the Companies Act of India
                  with registered office at A1/101, Gera Song of Joy, Grant
                  Road, Kharadi, Pune – 411014.
                </p>
                <p>
                  If you are reading this, it’s because you want to know what
                  information we are collecting about users (“You”) on
                  www.qurocity.ai, and on Qurocity App (“App”), what we are
                  doing with it, and what your options are. If you have any
                  questions or concerns after reading this, please email us at
                  partner@qurocity.ai.
                </p>
                <p>
                  This Privacy Policy (“Policy”) applies to the services
                  extended by the Qurocity Site and App (“Services”). This
                  Policy describes only our online information collection and
                  use practices at the Site and the App; it doesn’t apply to
                  information we collect about you offline, such as over the
                  phone or in person. By using our Services, you consent to this
                  Policy. We reserve the right to amend the Policy and
                  amendments will be effective as of the moment of publication
                  on the Site. You should check the Site regularly for
                  amendments.
                </p>
                <p>
                  We are committed towards the security of your privacy and this
                  document further details our information practices.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>COLLECTION OF YOUR INFORMATION BY US :-</h5>
                <p>
                  When you use Qurocity, You provide us with two types of
                  information: (i) information you submit via the Service and
                  (ii) information regarding your use of the Service collected
                  by us as you interact with the Service.
                </p>
                <p>
                  Qurocity stores your IP address when you login to the website
                  or download the app. Also, your device ID and type are stored
                  in case of app. We also use cookies for data collection. A
                  cookie stores small bits of information stored by your browser
                  which can be later used for providing customised services .
                  Although you can disable cookies whenever you want through
                  your browser settings, they are recommended to enjoy
                  personalised services and a better learning experience.
                </p>
                <p>
                  Once inside the website or app, you are prompted to make an
                  account and during this process we may collect your email
                  address, name, phone number, address and other personal
                  details.We may also ask you to share the OTP sent via SMS or a
                  password or to verify a link sent on your e-mail address. All
                  this is necessary to uniquely identify and authenticate
                  you.With your permission we may also collect info about your
                  location, age, gender and contact list.
                </p>
                <p>
                  While you are using our services on web or app, we record your
                  responses and activity data, including but not limited to,
                  textual and voice responses and session details.
                </p>
                <p>Reasons for collecting Information :</p>
                <p>
                  We use personal details and other information to maintain the
                  general and personalised content and functionality of the
                  Services. In addition, we use personal details to make it
                  possible to accommodate your requests, and so that we are able
                  to provide you with service when using our Services and for
                  the purposes set out elsewhere in this Policy. More
                  specifically, it may be used for one of the following:
                </p>
                <ul>
                  <li>
                    1. To personalize your experience and make bespoke
                    recommendations.
                  </li>
                  <li>
                    2. To help you efficiently access your information and the
                    progress each time you use our Services.
                  </li>
                  <li>
                    3. To improve or add to our Services based on the
                    information and feedback we receive from you.
                  </li>
                  <li>
                    4. To administer a contest, promotion, survey, etc. or to
                    maintain record of our dealings with you.
                  </li>
                  <li>
                    5. To analyze and draw trend reports from aggregated
                    statistics of user activity.
                  </li>
                  <li>
                    6. To send periodic emails for sharing information and
                    updates pertaining to your order, occasional company news,
                    updates, related product or service information, etc.
                  </li>
                </ul>
              </div>
              <div className={ppcss.policyContent}>
                <h5>USE OF YOUR INFORMATION BY US :-</h5>
                <p>
                  Qurocity may use the information collected by you for the
                  following purposes:
                </p>
                <p>
                  Authentication: Your personal information helps us identify
                  you uniquely and authenticate your use of Qurocity services by
                  creating an account
                </p>
                <p>
                  Personalisation: Based on the data on your activity patterns
                  and responses, Qurocity customises the content and its
                  delivery to you so that the learning experience can be made
                  more meaningful.
                </p>
                <p>
                  Notifications: Your email address and phone number stored by
                  us can be used to send you helpful notifications through
                  e-mails and SMS which add to the effectiveness of the service.
                </p>
                <p>
                  Communication: Your personal details may also be used to
                  answer your queries/doubts.
                </p>
                <p>
                  Legal Purposes: In case of a legal situation, your information
                  may be used to comply with the law to help an investigation or
                  legal proceeding.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>SHARING OF YOUR INFORMATION WITH THIRD PARTIE :-</h5>
                <p>
                  Qurocity gives highest importance to the safety of your
                  information. However, there are certain cases where we might
                  have to share your data with third parties as necessitated by
                  law or despite our best intentions, we may be intercepted by
                  ill-willed entities. Therefore, it is advisable to be fully
                  aware of the risks associated with sharing your personal
                  information with us. Following are a few instances where we
                  might share your personal data with external parties:
                </p>
                <p>
                  WITH REGULATORY AUTHORITIES: In cases of legal proceedings or
                  investigations by a government body, we may be obligated to
                  disclose all your information stored with us to help the
                  process
                </p>
                <p>
                  WITH EMPLOYEES, CONTRACTORS, AND AFFILIATED ORGANIZATIONS:
                  Strictly on a need-to-know basis in order to process it on
                  Qurocity’s behalf or to facilitate smooth functioning of our
                  Services, such as providing network services, IT support, and
                  customer service.
                </p>
                <p>
                  WITH PARENT COMPANY, SUBSIDIARY, INVESTOR, OR ACQUIRER: In the
                  event of corporate sale, merger, reorganization, sale of
                  assets, dissolution, or bankruptcy, your information maybe
                  part of the transferred assets.
                </p>
                <p>
                  However, personally identifiable information like name and
                  e-mail address will not be shared with any such external
                  parties.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>AGGREGATED STATISTICS :-</h5>
                <p>
                  Qurocity may collect statistics about the behavior of users to
                  its Services. When in the aggregate form and not pointing to a
                  particular individual, we may display this information
                  publicly or provide it to others.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>PAYMENT :-</h5>
                <p>
                  We may use and share the User information with reliable and
                  reputed third-party payment gateway to whom we are associated
                  in order to ensure swift and comfortable payment mechanism for
                  the User. The third-party payment gateway and other payment
                  transaction processors, have their own privacy policies in
                  respect to the information we are required to provide to them
                  for your purchase-related transactions. For these providers,
                  we recommend that you read their privacy policies so you can
                  understand the manner in which your personal information and
                  your credit/debit card details will be handled by these
                  providers. Once you leave our apps or website or are
                  redirected to a third-party website or application, you are no
                  longer governed by this Privacy Policy or our website’s Terms
                  of Service. Third-Party Access
                </p>
                <p>
                  The Application collects certain information during use, as
                  described above. We may also share aggregated, anonymized data
                  with third-party service providers like analytics services to
                  help us improve the Application and our services. These
                  third-party service providers are obligated by contract to
                  keep this information confidential and use it only for the
                  purposes we have specified.
                </p>
                <p>
                  For in-app purchases, we use Razorpay as our payment
                  processing service provider. Razorpay collects certain billing
                  information, such as your payment method details, to process
                  your transactions. Razorpay&apos;s privacy policy, which
                  governs their collection and use of your data, can be found
                  here: https://razorpay.com/privacy/.
                </p>
                <p>
                  Please note that we do not share any personally identifiable
                  information (PII) with Razorpay beyond what is necessary to
                  process your payment.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>Opt-Out Rights :-</h5>
                <p>
                  You can stop all collection of information by the Application
                  by uninstalling it. You can also control some data collection
                  practices through the app&apos;s settings menu [if
                  applicable]. For example, you may be able to disable location
                  sharing or other permissions.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>Data Retention Policy :-</h5>
                <p>
                  The Service Provider will retain User Provided data for as
                  long as you use the Application and for a reasonable time
                  thereafter. If you&apos;d like us to delete User Provided Data
                  that you have provided via the Application, please contact us
                  at partner@qurocity.ai and we will respond in a reasonable
                  time.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>SECURITY OF YOUR INFORMATION :-</h5>
                <p>
                  At Qurocity, we are committed to the security of your privacy
                  which is why we have taken adequate measures to ensure that
                  your information is safe with us. However, since no system can
                  guarantee 100% safety against hackers, we advise you to use
                  the website and app assuming that the details you share with
                  us maybe compromised in case of a cyber security breach.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>THIRD PARTY LINKS / ADVERTISERS :-</h5>
                <p>
                  We may include or offer third party products or services on
                  our website. These third parties may use cookies, pixel tags
                  (also called web beacons or clear gifs), and other
                  technologies to collect information for such purposes. Pixel
                  tags enable recognizing a browser’s cookie when a browser
                  visits the site on which the beacon is located, and to learn
                  which banner ads bring users to a given site. Similarly, ads
                  appearing on any of our Services may be delivered to users by
                  advertising partners, who may set cookies. This information
                  allows ad networks to, among other things, deliver targeted
                  advertisements that they believe will be of most interest to
                  you.
                </p>
                <p>
                  This Policy covers the use of cookies by Qurocity and does not
                  cover the use of cookies by any third-parties. We have no
                  control over the privacy practices or the content of any of
                  our business partners, advertisers, sponsors, or other website
                  to which we provide links. As such, we are not responsible for
                  the content or the privacy policies of those third-party
                  website. You should check the applicable third-party privacy
                  policy and terms of use when visiting any other website.
                  Nonetheless, we seek to protect the integrity of our Services
                  and welcome any feedback about these site.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>UPDATION/DELETION OF YOUR INFORMATION :-</h5>
                <p>
                  Once you update/delete your personally identifiable
                  information through your account settings like name and e-mail
                  address in the Qurocity website or app, this old/deleted
                  information is not stored in any form at our end. You have
                  every right to cease to hold an account with us as and when
                  you want. However, the past activity data associated with your
                  account is intact in anonymous form with us and we may utilise
                  it for research and analysis purposes in order to improve the
                  quality of our services.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>REVISION OF POLICY :-</h5>
                <p>
                  Qurocity reserves the right to revise this privacy policy as
                  and when needed and a notice of revision, in case of material
                  changes, will be provided on the website. However, it is your
                  responsibility to stay updated on any policy revisions and we
                  will take your continued use of our services as the acceptance
                  of the new policies.
                </p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>DEVELOPED BY :-</h5>
                <p>This Application is developed by Qurocity Developers.</p>
              </div>
              <div className={ppcss.policyContent}>
                <h5>MORE INFORMATION :-</h5>
                <p>
                  If you still have questions regarding privacy issues and how
                  we handle your information that we store, please feel free to
                  reach us at partner@qurocity.ai
                </p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default PrivacyPolicy;
