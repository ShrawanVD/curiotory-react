import list from "./Courselist.module.css";

function Courselist() {
  return (
    <>
      <div className={list.courseListContainer}>
        <h2>Language learning courses at just ₹99</h2>
        <div className={list.courseCardContainer}>
          <a href="course/french">
            <div className={list.courseLangCard}>
              <img src="./Course/french.png" alt="French" width="180" height="180" />
              <h4>French</h4>
            </div>
          </a>
          {/* <a href="course/german">
            <div className={list.courseLangCard}>
              <img src="./Course/german.png" alt="German" width="150" height="150" />
              <h4>German</h4>
            </div>
          </a> */}
          {/* <a href="course/spanish">
            <div className={list.courseLangCard}>
              <img src="./Course/spanish.png" alt="Spanish" width="150" height="150" />
              <h4>Spanish</h4>
            </div>
          </a> */}
          <a href="course/english">
            <div className={list.courseLangCard}>
              <img src="./Course/english.png" alt="English" width="180" height="180" />
              <h4>English</h4>
            </div>
          </a>
          <a href="course/mandarin">
            <div className={list.courseLangCard}>
              <img src="./Course/mandarin.png" alt="Mandarin" width="180" height="180" />
              <h4>Mandarin</h4>
            </div>
          </a>
          <a href="course/japanese">
            <div className={list.courseLangCard}>
              <img src="./Course/japanese.png" alt="Japanese" width="180" height="180" />
              <h4>Japanese</h4>
            </div>
          </a>
          <a href="course/korean">
            <div className={list.courseLangCard}>
              <img src="./Course/korean.png" alt="Korean" width="180" height="180" />
              <h4>Korean</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Courselist;
