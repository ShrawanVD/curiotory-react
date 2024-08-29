import Slider from "react-slick";
import PropTypes from "prop-types";
import reviewcourse from "./Reviewcourse.module.css";

const reviews = [
  {
    id: 1,
    text: "Qurocity’s German course has been a game-changer for me. The interactive lessons and personalized feedback made learning German enjoyable and effective. I feel confident speaking German in both professional and social settings now.",
    name: "Ravi Kumar",
    rating: 5,
  },
  {
    id: 2,
    text: "I love how Qurocity’s German course integrates practical exercises with theory. The flexibility of the course allowed me to learn at my own pace, and the native-speaking tutors were incredibly supportive. Highly recommend it!",
    name: "Ayesha Patel",
    rating: 5,
  },
  {
    id: 3,
    text: "The Qurocity German course exceeded my expectations. The curriculum is well-structured, and the immersive activities helped me grasp the language quickly. It’s been an excellent investment in my career growth.",
    name: "Sandeep Sharma",
    rating: 5,
  },
  {
    id: 4,
    text: "Learning German with Qurocity has been an amazing experience. The course is comprehensive and engaging, and the support from tutors made a big difference. My language skills have improved significantly.",
    name: "Priya Desai",
    rating: 5,
  },
  {
    id: 5,
    text: "Qurocity’s German course is fantastic for anyone serious about mastering the language. The content is relevant and challenging, and the interactive tools make learning fun. I feel well-prepared for my travels to Germany.",
    name: "Amit Singh",
    rating: 5,
  },
  {
    id: 6,
    text: "Qurocity’s approach to teaching German is both innovative and effective. The course material is engaging, and the real-world scenarios have been incredibly helpful. I’m now comfortable conversing in German daily.",
    name: "Rajesh Mehta",
    rating: 5,
  },
  {
    id: 7,
    text: "I’ve been thrilled with my progress in German thanks to Qurocity. The course’s blend of interactive lessons and personalized feedback was just what I needed to achieve fluency. It’s a great resource for learners at any level.",
    name: "Sonal Reddy",
    rating: 5,
  },
  {
    id: 8,
    text: "Learning German with Qurocity was a fantastic decision. The course’s engaging content and supportive tutors have made learning German a smooth and enjoyable process. I feel confident and prepared for future opportunities.",
    name: "Meera Jain",
    rating: 5,
  },
  {
    id: 9,
    text: "Qurocity has truly impressed me with their German course. The structured lessons and interactive exercises are designed to make learning effective and enjoyable. I’ve noticed significant improvement in my German skills.",
    name: "Karan Sharma",
    rating: 5,
  },
  {
    id: 10,
    text: "The Qurocity German course is exceptional. The comprehensive curriculum and the opportunity to interact with native speakers provided me with the skills I needed to excel. It’s a must-try for anyone serious about learning German.",
    name: "Divya Iyer",
    rating: 5,
  },
  {
    id: 11,
    text: "Qurocity’s German course has been incredibly rewarding. The detailed lessons and practical exercises have helped me make significant progress. I now feel much more confident using German in my daily life.",
    name: "Rohan Patel",
    rating: 5,
  },
  {
    id: 12,
    text: "I’m so pleased with my experience in Qurocity’s German course. The engaging format and helpful feedback from tutors have made learning enjoyable and effective. I’m excited to continue using my new language skills.",
    name: "Simran Kaur",
    rating: 5,
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
        breakpoint: 1260,
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
