import list from "./Courselist.module.css";

function Courselist() {
  return (
    <>
      <div className={list.courseListContainer}>
        <h2>Learn at just ₹99</h2>
        <div className={list.courseCardContainer}>
          <a href="course/french">
            <div className={list.courseLangCard}>
              <img src="./Course/french.png" alt="French" />
              <h4>French</h4>
            </div>
          </a>
          {/* <a href="course/german">
            <div className={list.courseLangCard}>
              <img src="./Course/german.png" alt="German" />
              <h4>German</h4>
            </div>
          </a> */}
          {/* <a href="course/spanish">
            <div className={list.courseLangCard}>
              <img src="./Course/spanish.png" alt="Spanish" />
              <h4>Spanish</h4>
            </div>
          </a> */}
          <a href="course/english">
            <div className={list.courseLangCard}>
              <img src="./Course/english.png" alt="English" />
              <h4>English</h4>
            </div>
          </a>
          <a href="course/mandarin">
            <div className={list.courseLangCard}>
              <img src="./Course/mandarin.png" alt="Mandarin" />
              <h4>Mandarin</h4>
            </div>
          </a>
          <a href="course/japanese">
            <div className={list.courseLangCard}>
              <img src="./Course/japanese.png" alt="Japanese" />
              <h4>Japanese</h4>
            </div>
          </a>
          <a href="course/korean">
            <div className={list.courseLangCard}>
              <img src="./Course/korean.png" alt="Korean" />
              <h4>Korean</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Courselist;
