import "./CheckoutPg.css";
import Navv from "../Navv/Navv";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function CheckoutPg() {
  // --------------------------------- button enabling - disabling  -------------------------------

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    pass: "",
  });

  // function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const [amount, setamount] = useState(99);

  const navigate = useNavigate();

  // handlePayment Function
  const handlePayment = async () => {
    console.log("in handle function");
    try {
      const res = await fetch(`https://lms-backend-3nru.onrender.com/api/payment/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount,
        }),
      });

      const data = await res.json();
      console.log(data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to initiate payment");
    }
  };

  // payment verify function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: {}.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Shrawan",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch(`https://lms-backend-3nru.onrender.com/api/payment/verify`, {
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
          });

          const verifyData = await res.json();

          if (verifyData) {
            toast.success(verifyData.message, {
              onClose: () => navigate("/", { replace: true }),
            });
          }
        } catch (error) {
          console.log("The post error is: " + error);
          toast.error("Payment verification failed");
        }
      },

      theme: {
        color: "#5f63b8",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // used to reload the page after the payment is done
  useEffect(() => {
    // Reload the page once after the initial render
    if (window.performance && window.performance.navigation.type !== 1) {
      // Check if page is not being loaded from a cache
      window.location.reload();
    }
  }, []);

  // --------------------------------- actual code --------------------------------------

  return (
    <div className="mainnn">
      <Navv />
      <div className="checkout-pg">
        {/* left section */}
        <div className="leftpg">
          {/* logo */}

          {/* content starts */}

          <div className="course_details">
            <div class="custom">
              <div class="card-body">
                <h3 class="card-title">
                  The Youtube Blueprint: Make Content Creation your Career!
                </h3>
                <h6 class="card-title text-muted">
                  by <span className="teacher">Adam Smith</span>
                </h6>
                <img
                  style={{
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    borderRadius: "10px",
                    width: "100%",
                    // height: "60%",
                  }}
                  src="/Index/cc.jpeg"
                  // src="https://academy.dhruvrathee.com/publicassets/-img_6611-4a677640c26132fdaef8a472992ead8a.JPG"
                />
                <p class="card-text">
                  Have you ever dreamt of becoming a Youtuber? This is your
                  blueprint to getting there. Whether you want to take up
                  content creation as a full time career or a part-time job,
                  this all-in-one course is your perfect plan of action. Learn
                  to ideate, script, film, and edit amazing videos. Then
                  understand the secret to getting lakhs of followers and making
                  money as a content creator. It's time to live your dream life!
                </p>
                <hr />
                <p
                  class="card-text"
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  <small
                    style={{
                      fontSize: "11px",
                      color: "#656565",
                      textAlign: "left",
                    }}
                    class="text-muted"
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
                    class="text-muted"
                  >
                    <li>
                      <ul
                        style={{
                          cursor: "default",
                          textDecoration: "none",
                        }}
                      >
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
        <div className="rightpg">
          <div className="master-container">
            {/* heading */}
            <div className="heading">
              <h5
                style={{
                  marginTop: "-6.5rem",
                  fontWeight: "bold",
                }}
              >
                Payment Details
              </h5>
              <p className="text-muted">
                Complete your purchase by providing your payment details.
              </p>
            </div>

            {/* first card */}
            <div className="card cart">
              <label className="title" style={{ fontSize: "0.8rem" }}>
                Billing Information
              </label>
              <div className="products">
                <div class="form-container">
                  <input
                    type="text"
                    className="input"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    name="phone"
                    className="input"
                    placeholder="Phone"
                  />
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    value={formData.email || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="New Password"
                    value={formData.password || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* second card - COUPONS */}
            {/* <div class="card coupons" style={{ height: "200px" }}>
              <label class="title">Apply coupons</label>
              <form class="form">
                <input
                  type="text"
                  placeholder="Apply your coupons here"
                  class="input_field"
                />
                <button>Apply</button>
              </form>
            </div> */}

            {/* third card payment details */}
            <div class="card checkout">
              <label class="title" style={{ fontSize: "0.8rem" }}>
                Checkout
              </label>
              <div class="details">
                <span className="checkout-span">Total Fee:</span>
                <span className="checkout-amount">99 Rs</span>
                {/* <span>Discount through applied coupons:</span>
                <span>3.99$</span>
                <span>Shipping fees:</span>
                <span>4.99$</span> */}
              </div>
            </div>

            {/* button */}
            <div className="checkout--footer">
              <button
                disabled={!isButtonEnabled}
                style={{
                  backgroundColor: isButtonEnabled ? "black" : "#ccc",
                  // backgroundColor: isButtonEnabled ? "#007bff" : "#ccc",
                  cursor: isButtonEnabled ? "pointer" : "not-allowed",
                }}
                onClick={handlePayment}
                className="purchase--btn"
              >
                Proceed to Buy
              </button>
              <img
                className="images"
                src="https://academy.dhruvrathee.com/_next/static/media/payment-sprite.82bf98c6.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default CheckoutPg;
