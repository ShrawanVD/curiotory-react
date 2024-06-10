import React from "react";
import pay from "./CheckoutPg1.module.css";

function CheckoutRight({ item, isVisible, onPayment, isButtonEnabled }) {
  if (!isVisible) return null;

  return (
    <div className={pay.rightpg}>
      <div className={pay.master_container}>
        <div className={pay.card}>
          <div className={pay.heading}>
            <div className={pay.title}>
              <p>Cart</p>
            </div>
          </div>
          <div className={pay.cart}>
            <div className={pay.products}>
              <div className={pay.item}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
          <div className={pay.checkout}>
            <div className={pay.details}>
              <p className={pay.checkout_span}>Total Amount</p>
              <p className={pay.checkout_amount}>{item.price}</p>
            </div>
            <div className={pay.checkout_footer}>
              <button
                className="purchase_btn"
                onClick={onPayment}
                disabled={!isButtonEnabled}
              >
                Complete Purchase
              </button>
              <div className="images">
                {/* (payment logos if needed) */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutRight;
