// payment verification is remaining
import pay from "./CheckoutPg.module.css";
import Navv from "../NewNavbar/Newnavbar";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const sampleData = [
  {
    id: 1,
    title: "English Course",
    content:
      "Start your A1 English journey with our unique course! Easily learn the basics, excel in A1 exams, and strengthen your English foundation. Boost your confidence and begin your path to fluency. Experience seamless learning and achieve remarkable results. Your English mastery journey begins here!",
    ytLink: "https://www.youtube.com/embed/EQ5g5VDbnG4?si=vsrAzB34Q4naDCE_",
  },
  {
    id: 2,
    title: "French Course",
    content:
      "Bonjour! Start Your French Journey with Our Tailored Course! From  Basics to Advanced, Ace Exams and Fortify Your Foundation. Boost Confidence and Progress Toward Fluency. Seamlessly Learn and  Attain Impressive Results. Your Path to French Mastery Begins Now!",
    ytLink: "https://www.youtube.com/embed/aXTwNIoym4U?si=HVhipSfvxQLh8bdn",
  },
  {
    id: 3,
    title: "German Course",
    content:
      "Start your German journey with our unique course! Easily learn from basics to advanced levels, excel in exams, and strengthen your German foundation. Boost your confidence and pave your way to fluency. Experience seamless learning and achieve outstanding results. Your path to mastering German begins here!",
    ytLink: "https://www.youtube.com/embed/BJTxncjyyQI?si=O5plcg3tuPfHXNw-",
  },
  {
    id: 4,
    title: "Japenese Course",
    content:
      "Begin your Japanese journey with our unique course! Easily learn the basics to advance, excel in exams, and strengthen your Japanese foundation. Boost your confidence and start your path to fluency. Experience seamless learning and achieve remarkable results. Your Japanese mastery journey starts here!",
    ytLink: "https://www.youtube.com/embed/59astp-V2rQ?si=6ARIR9bPEGsen15D",
  },
  {
    id: 5,
    title: "Korean Course",
    content:
      "Kickstart Your Korean Learning Adventure Today! From Beginner to Advanced Levels, Ace Exams, and Fortify Your Korean Skills. Build Confidence and Dive into Fluency. Seamlessly Navigate Your Learning Journey and Witness Extraordinary Progress. Your Path to Korean Proficiency Begins Now!",
    ytLink: "https://www.youtube.com/embed/TZ1Oy5LUVls?si=7JgbC1PpwNn71-dr",
  },
  {
    id: 6,
    title: "Mandarian Course",
    content:
      " Begin Your Mandarin Adventure! Easily Learn from Basics to Advanced, Ace Exams, and Build a Strong Mandarin Foundation. Boost Confidence and Kickstart Your Journey to Fluency. Enjoy Smooth Learning and See Amazing Results. Start Your Mandarin Mastery Today!",
    ytLink: "https://www.youtube.com/embed/zd9XnZAl8B0?si=D-daAdwvSwzt59YK",
  },
  {
    id: 7,
    title: "Spanish Course",
    content:
      "Begin your Spanish adventure with our one-of-a-kind course! Quickly grasp the fundamentals to advance, excel in exams, and solidify your Spanish foundation. Gain confidence and set yourself on the path to fluency. Enjoy smooth learning and achieve outstanding results. Your journey to mastering Spanish begins now!",
    ytLink: "https://www.youtube.com/embed/e3QTQXmqWnM?si=i1GosbSYtNN5olin",
  },
];
function CheckoutPg() {
  // finding the id
  const { id } = useParams();
  const item = sampleData.find((data) => data.id === parseInt(id));
  // --------------------------------- button enabling - disabling  -------------------------------
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  // function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // let error = "";
    // if (name === "fullName") {
    //   // First letter capital validation
    //   if (!/^[A-Z][a-zA-Z\s]*$/.test(value)) {
    //     error = "Name should start with a capital letter";
    //   }
    // } else if (name === "phone") {
    //   // Phone number validation
    //   if (!/^\d{10}$/.test(value)) {
    //     error = "Enter a valid phone number with 10 digits";
    //   }
    // } else if (name === "email") {
    //   // Email validation
    //   if (!/\S+@\S+\.\S+/.test(value)) {
    //     error = "Enter a valid email address";
    //   }
    // } else if (name === "password") {
    //   // Password validation (if any specific requirement, add here)
    //   if (value.length < 6) {
    //     error = "Password should be at least 6 characters long";
    //   }
    // }
    setFormData({ ...formData, [name]: value });
    // setErrors({ ...errors, [name]: error });
  };
  // Check if all fields are filled
  useEffect(() => {
    console.log("inside useeffect at start: " + isButtonEnabled);
    const { fullName, phone, email, password } = formData;
    if (fullName && phone && email && password) {
      setIsButtonEnabled(true);
      console.log("inside useeffect in if block: " + isButtonEnabled);
    } else {
      setIsButtonEnabled(false);
      console.log("inside useeffect in else block: " + isButtonEnabled);
    }
  }, [formData]);
  // ---------------------------- razorpay code: ---------------------------------------------

  const [amount, setAmount] = useState(1499); // Initial amount
  const [couponCode, setCouponCode] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(amount); // Final amount after applying discount
  const [couponMessage, setCouponMessage] = useState("");

  const navigate = useNavigate();

  // Handle Coupon Code Application
  // const applyCoupon = async () => {
  //   try {
  //     const res = await fetch(
  //       // `http://localhost:4000/api/payment/coupon/validate`,
  //       `https://lms-backend-1-deyq.onrender.com/api/payment/coupon/validate`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           couponCode,
  //           originalAmount: amount, // Pass the original amount here
  //         }),
  //       }
  //     );

  //     const data = await res.json();
  //     // Log the data to see its structure
  //     console.log("API response:", JSON.stringify(data, null, 2));

  //     if (data.valid) {
  //       const newAmount = data.finalAmount; // Calculate discounted amount
  //       setDiscountedAmount(newAmount > 0 ? newAmount : 0); // Ensure amount doesn’t go below zero
  //       setCouponMessage(`Coupon applied! You saved ₹${data.discount}`);
  //     } else {
  //       setCouponMessage("Invalid or expired coupon code");
  //     }
  //   } catch (error) {
  //     setCouponMessage("Failed to apply coupon code");
  //   }
  // };

  // Handle Payment Function
  const handlePayment = async () => {
    const discountedAmount = 1299; // Hard-coded amount

    console.log("The discouted amount is: " + discountedAmount);

    try {
      const res = await fetch(
        `http://localhost:4000/api/payment/order`,
        // `https://lms-backend-1-deyq.onrender.com/api/payment/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ amount: discountedAmount }), // Use discounted amount
        }
      );

      const data = await res.json();

      console.log("API response:", JSON.stringify(data, null, 2));
      // console.log("Order Data Sent to Razorpay:", {
      //   amount: discountedAmount * 100, // Amount in paise
      //   currency: "INR",
      //   order_id: data.data.id, // Razorpay order ID
      // });

      handlePaymentVerify(data.data);
    } catch (error) {
      toast.error("Failed to initiate payment");
    }
  };

  // Payment Verify Function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: "RAZORPAY_KEY_ID",
      amount: data.amount,
      currency: data.currency,
      name: "Qurocity",
      description: "",
      order_id: data.id,
      handler: async (response) => {
        try {
          const res = await fetch(
            `https://lms-backend-1-deyq.onrender.com/api/payment/verify`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
              }),
            }
          );

          const verifyData = await res.json();

          if (verifyData) {
            toast.success(verifyData.message, {
              onClose: () => navigate("/", { replace: true }),
            });
          }
        } catch (error) {
          toast.error("Payment verification failed");
        }
      },
      theme: { color: "#5f63b8" },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // const [amount, setamount] = useState(99);
  // const navigate = useNavigate();
  // // handlePayment Function
  // const handlePayment = async () => {
  //   try {
  //     const res = await fetch(
  //       // https://lms-backend-3nru.onrender.com
  //       `https://lms-backend-1-deyq.onrender.com/api/payment/subscription`,
  //       // `http://localhost:4000/api/payment/subscription`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           amount,
  //         }),
  //       }
  //     );
  //     const data = await res.json();
  //     // console.log(data);
  //     handlePaymentVerify(data.data);
  //   } catch (error) {
  //     // console.log(error);
  //     toast.error("Failed to initiate payment");
  //     history.push("/notFound");
  //   }
  // };
  // // payment verify function
  // const handlePaymentVerify = async (data) => {
  //   const options = {
  //     key: "rzp_live_6ht8FWR2aK0Ug5", // live id
  //     // key: "rzp_test_JPJHlewmYtVhHY",  // demo Qurocity id
  //     name: "Qurocity",
  //     description: "Buy this Exciting Language Course",
  //     subscription_id: data.id,
  //     handler: async (response) => {
  //       try {
  //         const res = await fetch(
  //           `https://lms-backend-1-deyq.onrender.com/api/payment/verification`,
  //           // `https://localhost:4000/api/payment/verification`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "content-type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               razorpay_subscription_id: response.razorpay_subscription_id,
  //               razorpay_payment_id: response.razorpay_payment_id,
  //               razorpay_signature: response.razorpay_signature,
  //               fullName: formData.fullName,
  //               phone: formData.phone,
  //               email: formData.email,
  //               password: formData.password,
  //             }),
  //           }
  //         );
  //         const verifyData = await res.json();
  //         // console.log(verifyData);
  //         if (verifyData) {
  //           toast.success(verifyData.message, {
  //             onClose: () =>
  //               // navigate("https://Qurocity.com/lms", { replace: true }),
  //               (window.location.href = "https://Qurocity.com/lms"),
  //           });
  //         }
  //       } catch (error) {
  //         // console.log("The post error is: " + error);
  //         toast.error("Payment verification failed");
  //         history.push("/notFound");
  //       }
  //     },
  //     theme: {
  //       color: "#5f63b8",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };
  // const [amount, setamount] = useState(1499);

  // const navigate = useNavigate();

  // // handlePayment Function
  // const handlePayment = async () => {
  //   console.log("in handle function");
  //   try {
  //     const res = await fetch(`https://lms-backend-1-deyq.onrender.com/api/payment/order`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         amount,
  //       }),
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     handlePaymentVerify(data.data);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to initiate payment");
  //   }
  // };

  // // payment verify function
  // const handlePaymentVerify = async (data) => {
  //   const options = {
  //     key: {}.RAZORPAY_KEY_ID,
  //     amount: data.amount,
  //     currency: data.currency,
  //     name: "Qurocity",
  //     description: "",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       console.log("response", response);
  //       try {
  //         const res = await fetch(`https://lms-backend-1-deyq.onrender.com/api/payment/verify`, {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             razorpay_order_id: response.razorpay_order_id,
  //             razorpay_payment_id: response.razorpay_payment_id,
  //             razorpay_signature: response.razorpay_signature,
  //             fullName: formData.fullName,
  //             phone: formData.phone,
  //             email: formData.email,
  //             password: formData.password,
  //           }),
  //         });

  //         const verifyData = await res.json();

  //         if (verifyData) {
  //           toast.success(verifyData.message, {
  //             onClose: () => navigate("/", { replace: true }),
  //           });
  //         }
  //       } catch (error) {
  //         console.log("The post error is: " + error);
  //         toast.error("Payment verification failed");
  //       }
  //     },

  //     theme: {
  //       color: "#5f63b8",
  //     },
  //   };

  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };

  // used to reload the page after the payment is done
  useEffect(() => {
    // Reload the page once after the initial render
    if (window.performance && window.performance.navigation.type !== 1) {
      // Check if page is not being loaded from a cache
      window.location.reload();
    }
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
  // --------------------------------- actual code --------------------------------------
  return (
    <>
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
        <link rel="canonical" href="https://qurocity.ai/checkout" />
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
      <Navv />
      <div className={pay.checkout_pg}>
        {/* left section */}
        <div className={`${pay.leftpg}`}>
          <div className={pay.course_details}>
            <div className={pay.custom}>
              <div className={pay.card_body}>
                <h3 className={pay.card_title}>{item.title}</h3>
                <iframe
                  src={item.ytLink}
                  style={{
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    borderRadius: "10px",
                    width: "100%",
                    height: "15rem",
                  }}
                ></iframe>
                <p className={pay.card_text}>{item.content}</p>
                <hr />
                <p className={pay.card_text} style={{ padding: "0.5rem" }}>
                  <small
                    style={{
                      fontSize: "11px",
                      color: "#656565",
                      textAlign: "left",
                    }}
                    className={pay.text_muted}
                  >
                    You agree to share information entered on this page with
                    Chalkboard Academy (owner of this page) & Razorpay, adhering
                    to applicable laws.
                  </small>
                  <br />
                  <small
                    style={{
                      fontSize: "11px",
                      color: "#656565",
                      textAlign: "left",
                    }}
                    className={pay.text_muted}
                  >
                    <li>
                      <ul style={{ cursor: "default", textDecoration: "none" }}>
                        Chalkboard Academy
                      </ul>
                      <ul>
                        <a href="/privacy">Privacy</a>
                      </ul>
                      <ul>
                        <a href="/terms">Terms</a>
                      </ul>
                    </li>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className={`${pay.rightpg} `}>
          <div className={pay.master_container}>
            <div className={pay.heading}>
              <h5 style={{ marginTop: "-6.5rem", fontWeight: "bold" }}>
                Payment Details
              </h5>
              <p className={pay.text_muted}>
                Complete your purchase by providing your payment details.
              </p>
            </div>
            <div className={`${pay.card} ${pay.cart}`}>
              <label className={pay.title} style={{ fontSize: "0.8rem" }}>
                Billing Information
              </label>
              <div className={pay.products}>
                <div className={pay.form_container}>
                  <div>
                    <input
                      type="text"
                      className={pay.input}
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      className={pay.input}
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className={pay.input}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className={pay.input}
                      placeholder="New Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div>
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button onClick={applyCoupon}>Apply Coupon</button>
                    {couponMessage && <p>{couponMessage}</p>}
                  </div> */}
                </div>
              </div>
            </div>
            <div className={`${pay.card} ${pay.checkout}`}>
              <label className={pay.title} style={{ fontSize: "0.8rem" }}>
                Checkout
              </label>
              <div className={pay.details}>
                <span className={pay.checkout_span}>Total Fee:</span>
                <span className={pay.checkout_amount}>1499 Rs</span>
              </div>
            </div>
            <div className={pay.checkout_footer}>
              <button
                disabled={!isButtonEnabled}
                style={{
                  backgroundColor: isButtonEnabled ? "black" : "#ccc",
                  cursor: isButtonEnabled ? "pointer" : "not-allowed",
                }}
                onClick={handlePayment}
                className={pay.purchase_btn}
              >
                Proceed to Buy
              </button>
              <img
                className={pay.images}
                src="https://academy.dhruvrathee.com/_next/static/media/payment-sprite.82bf98c6.svg"
                alt="pay image "
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default CheckoutPg;
