import Slider from "react-slick";
import PropTypes from "prop-types";
import reviewcourse from "./Reviewcourse.module.css";

const reviews = [
  {
    id: 1,
    text: "Curiotory is the best for learn Mandarin! I never thought I could learn a new language but this app makes it so easy. The lessons are really fun and engaging, and I can now speek basic Mandarin thanks to Curiotory!",
    name: "Amit Sharma ",
    rating: 5,
  },
  {
    id: 2,
    text: "I absolutely love Curiotory for Mandarin learning! The app is so user-friendly and the lessons are well designed. I feel much more confident in my Chinese-speaking abilities now. Highly recommend!",
    name: "Riya Patel ",
    rating: 4,
  },
  {
    id: 3,
    text: "Mandarin has always seemed like a difficult language, but Curiotory makes it accessible and enjoyable! The app's interactive features and cultural insights are really helpfull. Now I can order food in Mandarin!",
    name: "Karan Singh ",
    rating: 5,
  },
  {
    id: 4,
    text: "I'm learning Mandarin with Curiotory and it's been an amazing experience! The lessons are fun and easy to understand. I feel more confident in my language skills after using this app. Highly recommend it!",
    name: "Shreya Gupta ",
    rating: 4,
  },
  {
    id: 5,
    text: "Curiotory is great for learning Mandarin Chinese! The lessons are very informative and the app's interface is user friendly. I've been using it for a few weeks now and I can already see improvment in my language skills.",
    name: "Vikram Rao",
    rating: 4,
  },
  {
    id: 6,
    text: "I've always wanted to learn Mandarin and Curiotory has made it possible! The lessons are structured and easy to follow. I'm now able to have basic conversations in Mandarin. Highly recommended!",
    name: "Neha Gupta ",
    rating: 4,
  },
  {
    id: 7,
    text: "Curiotory is an amazing app for learning Mandarin! The lessons are really interactive and engaging. I've been using it for a while now and I'm impressed with how much I've learn. Definitely worth it!",
    name: "Rohan Patel",
    rating: 4,
  },
  {
    id: 8,
    text: "I'm so glad I found Curiotory for learning Mandarin Chinese! The lessons are well explained and the app is easy to navigate. I've been using it for a few months now and I'm already seeing progress in my language skills.",
    name: "Aisha Khan ",
    rating: 4,
  },
  {
    id: 9,
    text: "I've been using Curiotory to learn Mandarin and I'm really happy with my progress! The lessons are fun and interactive, and I feel more confident in my language abilities. Highly recommend it to anyone interested in learning Mandarin!",
    name: "Aryan Sharma ",
    rating: 4,
  },
  {
    id: 10,
    text: "Curiotory has been a game changer for me in learning Mandarin! The lessons are engaging and the app is easy to use. I've been recommend it to all my friends who want to learn Mandarin. Give it a try!",
    name: "Sneha Patel",
    rating: 4,
  },
];

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${reviewcourse.nextArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${reviewcourse.prevArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function Reviewcourse() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={reviewcourse.reviewsContainer}>
      <h1 className={reviewcourse.reviewsHeading}>
        Review of Our Previous Courses
      </h1>
      <Slider {...settings} className={reviewcourse.reviewsSlider}>
        {reviews.map((review) => (
          <div key={review.id} className={reviewcourse.reviewCard}>
            <p className={reviewcourse.reviewQuote}>&ldquo;</p>
            <p className={reviewcourse.reviewText}>{review.text}</p>
            <div className={reviewcourse.reviewHeader}>
              <div className={reviewcourse.nameLogo}>
                {review.name.charAt(0)}
              </div>
              <div>
                <div className={reviewcourse.reviewName}>{review.name}</div>
                <div className={reviewcourse.stars}>
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className={reviewcourse.star}>
                        &#9733;
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Reviewcourse;
