import Slider from "react-slick";
import PropTypes from "prop-types";
import reviewcourse from "./ReviewSession.module.css";

const reviews = [
  {
    id: 1,
    text: "I enrolled my son in Qurocity's Japanese lessons, and it was an excellent decision. His tutor worked closely with him, especially focusing on JLPT exam preparation. The personalized attention boosted his confidence, and he did exceptionally well in the exam. I’m so proud of his progress!",
    name: "Meera Nair (Japanese - Exam Success and Confidence)",
    rating: 5,
  },
  {
    id: 2,
    text: "We were looking for a program that could help my daughter with German for her future career. The tutor at Qurocity understood her goals and tailored lessons accordingly. She’s now confident with professional German, and we’re looking at job opportunities in Germany. Qurocity really helped her move forward.",
    name: "Sunil Agarwal (German - Career Opportunities and Language Mastery)",
    rating: 5,
  },
  {
    id: 3,
    text: "Qurocity’s personalized lessons for the JLPT exam were amazing! The tutor focused on my weaknesses and helped me improve my listening and reading skills. I’m now confident in my ability to pass the exam and speak fluently!",
    name: "Aarav Mehta (Japanese - Exam Preparation & Fluency)",
    rating: 5,
  },
  {
    id: 4,
    text: "I’ve learned so much with Qurocity! The tutor not only helped me with language skills but also introduced me to Japanese culture, which made learning even more fun. Now, I feel ready to converse with native speakers comfortably!",
    name: "Isha Sharma (Japanese - Teacher Support & Cultural Insights)",
    rating: 5,
  },
  {
    id: 5,
    text: "I enrolled my son in Qurocity’s Korean language program for career exploration. The tutor’s personalized approach made him more confident in speaking, and the cultural lessons gave him a deeper understanding of Korea. He’s now considering career options in Korean companies, thanks to Qurocity.",
    name: "Amit Desai (Korean - Career Growth and Global Awareness)",
    rating: 5,
  },
  {
    id: 6,
    text: "My daughter loved the personalized Spanish sessions at Qurocity. The lessons were engaging and practical, focusing on real-life conversations. Her tutor even introduced her to cultural aspects of Spain and Latin America. Now, she speaks Spanish fluently and is considering a trip to Spain!",
    name: "Kavita Joshi (Spanish - Conversational Confidence and Culture)",
    rating: 5,
  },
//   {
//     id: 7,
//     text: "I’ve been thrilled with my progress in German thanks to Qurocity. The course’s blend of interactive lessons and personalized feedback was just what I needed to achieve fluency. It’s a great resource for learners at any level.",
//     name: "Sonal Reddy",
//     rating: 5,
//   },
//   {
//     id: 8,
//     text: "Learning German with Qurocity was a fantastic decision. The course’s engaging content and supportive tutors have made learning German a smooth and enjoyable process. I feel confident and prepared for future opportunities.",
//     name: "Meera Jain",
//     rating: 5,
//   },
//   {
//     id: 9,
//     text: "Qurocity has truly impressed me with their German course. The structured lessons and interactive exercises are designed to make learning effective and enjoyable. I’ve noticed significant improvement in my German skills.",
//     name: "Karan Sharma",
//     rating: 5,
//   },
//   {
//     id: 10,
//     text: "The Qurocity German course is exceptional. The comprehensive curriculum and the opportunity to interact with native speakers provided me with the skills I needed to excel. It’s a must-try for anyone serious about learning German.",
//     name: "Divya Iyer",
//     rating: 5,
//   },
//   {
//     id: 11,
//     text: "Qurocity’s German course has been incredibly rewarding. The detailed lessons and practical exercises have helped me make significant progress. I now feel much more confident using German in my daily life.",
//     name: "Rohan Patel",
//     rating: 5,
//   },
//   {
//     id: 12,
//     text: "I’m so pleased with my experience in Qurocity’s German course. The engaging format and helpful feedback from tutors have made learning enjoyable and effective. I’m excited to continue using my new language skills.",
//     name: "Simran Kaur",
//     rating: 5,
//   },
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

function ReviewSession() {
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
        Reviews of our 1-on-1 Sessions
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

export default ReviewSession;
