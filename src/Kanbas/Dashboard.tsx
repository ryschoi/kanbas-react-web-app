import { Link } from "react-router-dom";
import "./styles.css";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/blue.png" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);
}

// import { Link } from "react-router-dom";
// import "./styles.css";
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">

//           {/* Course 1 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1234 React JS
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Full Stack software developer
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 2 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/4550/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS4550 Web Development
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Web Development
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 3 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/3000/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS3000 Algorithms and Data
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Algorithms and Data
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 4 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/2242/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     ARTG 2242 Information Design Principles
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Information Design Principles
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 5 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/2262/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     ARTG 2262 Prototyping with Code
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Prototyping with Code
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 6 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/3500/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS35000 Object Oriented Design
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Object Oriented Design
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Course 7 */}
//           <div className="wd-dashboard-course col" style={{ width: "270px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/4973/Home">
//                 <img src="/images/blue.png" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS4973 User-Experience Design
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     User-Experience Design
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
