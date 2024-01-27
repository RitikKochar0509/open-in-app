// Upload.jsx
import React from "react";
// import { ReactComponent as Bellicon } from "../assets/Bellicon.svg";
import { ReactComponent as Profile } from "../assets/Profile.svg";
import { ReactComponent as Excel } from "../assets/Excel.svg";

function Upload() {
  return (
    <div className="upload-page">
      <header className="page-header">
        <h1 className="title">Upload CSV</h1>

        <div className="icons">
          {/* <div className="bell-icon">{<Bellicon />}</div> */}
          <div className="profile-icon">{<Profile />}</div>
        </div>
      </header>
      <div className="input-container">
        <div className="upload-area">
          {<Excel />}

          <span>Drop your excel sheet here or browse</span>
        </div>
        <button className="upload-button">
          {/* SVG or text for the upload icon if needed */}
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;
