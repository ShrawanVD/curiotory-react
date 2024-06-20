import React from "react";
import styles from "./Rev.module.css";

const reviews = [
  {
    text: "Excellent course material and structure",
    author: "Rohit",
    image:
      "https://res.cloudinary.com/ddkfnfogy/image/upload/v1718777201/r_yellow_v1qfax.avif",
  },
  {
    text: "Very informative and easy to follow",
    author: "Priya",
    image:
      "https://res.cloudinary.com/ddkfnfogy/image/upload/v1718777201/p_yellow_ndipvh.jpg",
  },
  {
    text: "Great explanations and examples",
    author: "Sarang",
    image:
      "https://res.cloudinary.com/ddkfnfogy/image/upload/v1718777201/s_yellow_ojwbpn.jpg",
  },
  {
    text: "Engaging and interactive sessions",
    author: "Shivani",
    image:
      "https://res.cloudinary.com/ddkfnfogy/image/upload/v1718777201/s_yellow_ojwbpn.jpg",
  },
  {
    text: "Well-paced and thorough coverage of topics",
    author: "Vikram",
    image:
      "https://res.cloudinary.com/ddkfnfogy/image/upload/v1718777201/v_yellow_amcacc.jpg",
  },
  
  {
    text: "Helped me a lot in understanding the concepts",
    author: "Raj",
    image:
      "https://res.cloudinary.com/ddkfnfogy/image/upload/v1718777201/r_yellow_v1qfax.avif",
  },
];

const ReviewCard = ({ review }) => (
  <div className={styles.reviewCard}>
    <img src={review.image} alt="review image" />
    <p className={styles.reviewText}>"{review.text}"</p>
    <p className={styles.reviewText1}>- {review.author}</p>
  </div>
);

const Rev = () => (
  <div className={styles.main_rev}>
    <h2 className={styles.heading}>REVIEWS</h2>
    <div className={styles.reviewsContainer}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  </div>
);

export default Rev;
