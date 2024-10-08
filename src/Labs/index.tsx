import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Link } from "react-router-dom";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      My name: Rebecca Choi<br />
      Section 1<br />
      <a href="https://github.com/ryschoi/kanbas-react-web-app">Link to GitHub repository</a>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
