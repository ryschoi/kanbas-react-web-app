import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        
        <button>Collapse All</button> <button>View Progress</button> <select>
          <option value="publish all">Publish All</option>
          <option value="publish week 1">Publish Week 1</option> </select> <button>+ Module</button>
          <ModulesControls /><br /><br /><br /><br />

        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary "><BsGripVertical className="me-2 fs-3" />Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda<ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES<LessonControlButtons />
                </span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
                  Introduction to the course<LessonControlButtons />
                  </li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1">Introduction to Web Development</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Creating an HTTP server with Node.js</li>
                  <li className="wd-content=item list-group-item p-3 ps-1">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title wd-title p-3 ps-2 bg-secondary">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <span className="wd-title list-group-item p-3 ps-1">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item list-group-item p-3 ps-1">Learn how to create user itnerfaces with HTML</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Deploy the assignment to Netlify</li>
                </ul>
                <span className="wd-content">SLIDES</span>
                  <ul>
                  <li className="wd-content-item list-group-item p-3 ps-1">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Formatting Web content with Headings and</li>
                  <li className="wd-content-item list-group-item p-3 ps-1">Formatting content with Lists and Tables</li>
                  </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}