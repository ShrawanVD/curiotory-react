import React from "react";
import styles from "./Rev.module.css";

const reviews = [
  {
    text: "Excellent course material and structure",
    author: "Aditya",
    image:
      "https://res.cloudinary.com/dvk1ynowq/image/upload/v1718365641/IMG_0105_1_qjdq4i.png",
  },
  {
    text: "Very informative and easy to follow",
    author: "Priya",
    image:
      "https://res.cloudinary.com/dvk1ynowq/image/upload/v1718279771/shared_image_1_vx5oda.jpg",
  },
  {
    text: "Great explanations and examples",
    author: "Abhilasha",
    image:
      "https://res.cloudinary.com/dvk1ynowq/image/upload/v1718365641/IMG_0105_1_qjdq4i.png",
  },
  {
    text: "Helped me a lot in understanding the concepts",
    author: "Raj",
    image:
      "https://res.cloudinary.com/dvk1ynowq/image/upload/v1718279771/shared_image_1_vx5oda.jpg",
  },
  {
    text: "Well-paced and thorough coverage of topics",
    author: "Vikram",
    image:
      "https://res.cloudinary.com/dvk1ynowq/image/upload/v1718365641/IMG_0105_1_qjdq4i.png",
  },
  {
    text: "Engaging and interactive sessions",
    author: "Betal",
    image:
      "https://res.cloudinary.com/dvk1ynowq/image/upload/v1718279771/shared_image_1_vx5oda.jpg",
  },
];

const ReviewCard = ({ review }) => (
  <div className={styles.reviewCard}>
    <img src={review.image} alt={review.author} />
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
