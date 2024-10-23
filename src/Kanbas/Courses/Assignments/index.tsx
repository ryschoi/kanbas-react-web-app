import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;


  const links = [
    { path: `/Kanbas/Courses/${cid}/Assignments/${cid}` },];

  return (
    //search bar
    <div id="wd-assignments">
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input id="wd-search-assignment" placeholder="Search for Assignments" style={{ borderRadius: '10px' }} />
      </div>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignments </button>


      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group </button><br /><br /><br /><br />

      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <p className="wd-rounded-corners-all-around wd-border-thin wd-border-gray wd-border-solid  small-text">
                40% of Total
              </p>
              <FaPlus className="wd-side-icon" />

              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotebookThin className="me-2 fs-3" />
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`}
                      className="wd-assignment-link"> {assignment.title} </Link>
                    <br /> <LessonControlButtons />
                    <p>
                      <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.available} |<br />
                      <b>Due</b> {assignment.due} | {assignment.points}pts <IoIosCheckmarkCircle className="wd-checkmark" />
                    </p>
                  </li>
                ))}
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
}

{/* 
import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
export default function Assignments()
  const { cid } = useParams();
  const assignments = db.assignments;
  const links = [{ path: `/Kanbas/Courses/${cid}/Assignments/${cid}`}];

  return (
    <div id="wd-assignments">
      <div className="search-container">
        <CiSearch className="search-icons" />
        <input id="wd-search-assignment"
        placeholder="Search" style={{ borderRadius: '10px' }} />
      </div>
      
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignments">
        {assignments
          // .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                {assignment.name}
              </a><br />
              <LessonControlButtons />
              <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.available} |<br />
              <b>Due</b> {assignment.due} | {assignment.points}pts <IoIosCheckmarkCircle className="wd-checkmark" />
            </li>
          ))}
      </ul>
    </div>
  );
}*/}