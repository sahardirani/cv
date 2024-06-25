import React from "react";
import "./education.css";

function Education() {
  return (
    <>
      <div className="education-container">
        <h1 className="h1-design">My Education</h1>
        <table className="education-table">
          <tbody>
            <tr>
              <td>Lebanese Baccalaureate</td>
              <td>August 2021</td>
            </tr>
            <tr>
              <td>Bs in Computer Science at the Lebanese American University</td>
              <td>September 2021 - May 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Education;
