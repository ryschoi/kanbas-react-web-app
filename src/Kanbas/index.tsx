import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
// Entire nav bar. all other pages will get "added on" by the routes
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
    <table>
      <tr>
        <td valign="top">
          {/* importing the nav bar */}
          <KanbasNavigation />
        </td>
        <td valign="top">
      <h1>Kanbas</h1>
      {/* Will go to one of these options */}
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />
      </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
