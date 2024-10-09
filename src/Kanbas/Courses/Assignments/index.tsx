import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
        placeholder="Search" style={{ borderRadius: '10px' }} />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" />
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a><br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br />
          <b>Due</b> May 13 at 11:59pm | 100pts <IoIosCheckmarkCircle className="wd-checkmark" />
        </li>
        <li className="wd-assignment-list-item"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" />
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/5678/Assignments/567">
            A2 - CSS + BOOTSTRAP
          </a><br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br />
          <b>Due</b> May 20 at 11:59pm | 100pts <IoIosCheckmarkCircle className="wd-checkmark" />
        </li>
        <li className="wd-assignment-list-item"> <BsGripVertical className="me-2 fs-3" /> <PiNotebookThin className="me-2 fs-3" />
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/9101/Assignments/910">
            A3 - JAVASCRIPT + REACT
          </a><br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br />
          <b>Due</b> May 27 at 11:59pm | 100pts <IoIosCheckmarkCircle className="wd-checkmark" />
        </li>
      </ul>
    </div>
  );
}