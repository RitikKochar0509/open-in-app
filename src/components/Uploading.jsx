import React from "react";
// import { ReactComponent as Bellicon } from "../assets/Bellicon.svg";
import { ReactComponent as Profile } from "../assets/Profile.svg";
import { ReactComponent as Excel } from "../assets/Excel.svg";
import { ReactComponent as CircleIcon } from "../assets/CircleIcon.svg";

const Uploading = ()=> {
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

          <span>upload-template.xlsx</span>
          <span>Remove</span>
        </div>
        <button className="upload-button">
          {<CircleIcon />}
          
        </button>
      </div>
    </div>
  );
}

export default Uploading;
