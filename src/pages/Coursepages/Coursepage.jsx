import course from "./Coursepage.module.css";

function Coursepage() {
  const reviews = [
    {
      id: 1,
      text: "So the course is just as great as Dhruv Rathee himself, I like the way he explain the things by showing his own life experiences and yeah that will help me a lot for sure, mainly the day 3 and 4 part will help me beat the procrastination",
      name: "Hardeep S.",
      rating: 5,
    },
    {
      id: 2,
      text: "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness Dhruv talked about was wonderful. Video production quality was up to the mark. Kudos to Dhruv!",
      name: "Prithu H.",
      rating: 4,
    },
    {
      id: 3,
      text: "Great insights by Dhruv! He has managed to put the core concepts of not only being productive but also to live a better life",
      name: "Raghav Goel",
      rating: 5,
    },
    {
      id: 4,
      text: "I must say this was a life-changing course for me. Understanding the things which TRULY make me happy helped me identify the tasks that I should be",
      name: "John D.",
      rating: 4,
    },
    {
      id: 4,
      text: "I must say this was a life-changing course for me. Understanding the things which TRULY make me happy helped me identify the tasks that I should be",
      name: "John D.",
      rating: 4,
    },
    {
      id: 4,
      text: "I must say this was a life-changing course for me. Understanding the things which TRULY make me happy helped me identify the tasks that I should be",
      name: "John D.",
      rating: 4,
    },
    {
      id: 4,
      text: "I must say this was a life-changing course for me. Understanding the things which TRULY make me happy helped me identify the tasks that I should be",
      name: "John D.",
      rating: 4,
    },
  ];
  return (
    <>
      {/* cover page  */}
      <div className={course.container}>
        <header className={course.header}>
          <div className={course.authButtons}>
            <button className={course.loginButton}>Login</button>
            <button className={course.signUpButton}>Sign Up</button>
          </div>
          <img
            src="/Index/logo.png"
            alt="Curiotory Logo"
            className={course.logo}
          />
        </header>
        <div className={course.content}>
          <div className={course.textSection}>
            <h1>
              Be The <br />
              <span className={course.highlight}>Best Writer</span> With Our
              Guidance
            </h1>
            <button className={course.learnButton}>Let&apos;s Learn </button>
          </div>
          <div className={course.imageSection}>
            <img
              src="/Course/coverRight2.png"
              alt="Course Cover"
              className={course.coverImage}
            />
          </div>
        </div>
      </div>

      {/* review section */}
      <div>
        <div className={course.reviewsContainer}>
          <h1 className={course.reviewsHeading}>
            Review of Our Previous Courses
          </h1>
          <div className={course.reviewsGrid}>
            {reviews.map((review) => (
              <div key={review.id} className={course.reviewCard}>
                <p className={course.reviewQuote}>&ldquo;</p>
                <p className={course.reviewText}>{review.text}</p>
                <div className={course.reviewHeader}>
                  <div className={course.nameLogo}>{review.name.charAt(0)}</div>
                  <div>
                    <div className={course.reviewName}>{review.name}</div>
                    <div className={course.stars}>
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className={course.star}>
                            &#9733;
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursepage;
