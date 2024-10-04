import list from "./Courselist.module.css";

function Courselist() {
  return (
    <>
      <div className={list.courseListContainer}>
        <div className={list.courseCardContainer}>
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

          <div className={list.firstCourseRow}>
            <a href="course/mandarin">
              <div className={list.courseLangCard}>
                <img src="./Course/mandarin.png" alt="Mandarin" />
                {/* <h4>Mandarin</h4> */}
              </div>
            </a>
            <a href="course/japanese">
              <div className={list.courseLangCard}>
                <img src="./Course/japanese.png" alt="Japanese" />
                {/* <h4>Japanese</h4> */}
              </div>
            </a>
            <a href="course/korean">
              <div className={list.courseLangCard} id="korean">
                <img src="./Course/korean.png" alt="Korean" />
                {/* <h4>Korean</h4> */}
              </div>
            </a>
          </div>

          <div className={list.secondCourseRow}>
          <a href="course/french">
              <div className={list.courseLangCard}>
                <img src="./Course/french.png" alt="French" />
                {/* <h4>French</h4> */}
              </div>
            </a>
            <a href="course/german">
              <div className={list.courseLangCard}>
                <img src="./Course/german.png" alt="German" />
              </div>
            </a>
            <a href="course/english">
              <div className={list.courseLangCard}>
                <img src="./Course/english.png" alt="English" />
                {/* <h4>English</h4> */}
              </div>
            </a>
            
          </div>
        </div>

        <div className={list.courseList_right_side}>
          <h4>
            <span
              style={{
                color: "#1F6BB5",
              }}
            >
              Language Learning
            </span>{" "}
            <br />
            <span
              style={{
                color: "#F4AD28",
              }}
            >
              Courses At Just
            </span>{" "}
            <br />
            <i
              style={{
                color: "#EF4B2B",
              }}
              class="fa-solid fa-indian-rupee-sign"
            ></i>{" "}
            <span
              style={{
                color: "#EF4B2B",
                fontWeight: "bold",
              }}
            >
              1499!
            </span>
          </h4>
        </div>

        <div className={list.courseList_right_side1}>
          <h4>
            <span
              style={{
                color: "#1F6BB5",
              }}
            >
              Language Learning{" "}
            </span>
            <span
              style={{
                color: "#F4AD28",
              }}
            >
              Courses At Just{" "}
            </span>
            <i
              style={{
                color: "#EF4B2B",
              }}
              class="fa-solid fa-indian-rupee-sign"
            ></i>{" "}
            <span
              style={{
                color: "#EF4B2B",
                fontWeight: "bold",
              }}
            >
              1499!
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Courselist;
