// UploadFileTable.jsx
import React from "react";


const UploadFileTable = () => {
  // Placeholder function for handling tag selection, this should be replaced with your actual functionality.
  const handleSelectTag = (tag) => {
    console.log("Tag selected:", tag);
  };

  return (
    <div className="uploads-container">
      <div className="uploads-header">Uploads</div>
      <div className="table-container">
        <div className="table-header">
          <div className="header-cell">SI No.</div>
          <div className="header-cell">Links</div>
          <div className="header-cell">Prefix</div>
          <div className="header-cell">Add Tags</div>
          <div className="header-cell">Selected Tags</div>
        </div>

        {/* First Row */}
        <div className="table-row">
          <div className="cell serial-number">01</div>
          <div className="cell link">www.google.com</div>
          <div className="cell prefix">prefixsample</div>
          <div className="cell tags">
            <div className="tags-selected">
              <span>Tag 1 ✕</span>
              <span>Tag 2 ✕</span>
              <span>Tag 3 ✕</span>
              <span>Tag 4 ✕</span>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div className="table-row">
          <div className="cell serial-number">02</div>
          <div className="cell link">www.google.com</div>
          <div className="cell prefix">prefixsample</div>
          <div className="cell tags">
            <div className="tags-selected">
              <span>Tag 1 ✕</span>
              <span>Tag 2 ✕</span>
              <span>Tag 3 ✕</span>
              <span>Tag 4 ✕</span>
            </div>
          </div>
        </div>
        {/* ... Repeat similar structure for second row ... */}

        {/* Third Row with Dropdown */}
        <div className="table-row">
          <div className="cell serial-number">03</div>
          <div className="cell link">www.google.com</div>
          <div className="cell prefix">prefixsample</div>
          <div className="cell tags">
            <div className="tags-dropdown">
              <select
                className="tag-select"
                size="10"
                onChange={(e) => handleSelectTag(e.target.value)}
              >
                {Array.from({ length: 10 }, (_, i) => `Tag ${i + 1}`).map(
                  (tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="tags-selected">
              {/* ...selected tags here... */}
            </div>
          </div>
        </div>

        {/* Fourth and Fifth Row */}
        <div className="table-row">
          <div className="cell serial-number">04</div>
          <div className="cell link">www.google.com</div>
          <div className="cell prefix">prefixsample</div>
          <div className="cell tags">
            <div className="tags-selected">
              <span>Tag 1 ✕</span>
              <span>Tag 2 ✕</span>
              <span>Tag 3 ✕</span>
              <span>Tag 4 ✕</span>
            </div>
          </div>
        </div>

        <div className="table-row">
          <div className="cell serial-number">05</div>
          <div className="cell link">www.google.com</div>
          <div className="cell prefix">prefixsample</div>
          <div className="cell tags">
            <div className="tags-selected">
              <span>Tag 1 ✕</span>
              <span>Tag 2 ✕</span>
              <span>Tag 3 ✕</span>
              <span>Tag 4 ✕</span>
            </div>
          </div>
        </div>
        {/* ... Repeat similar structure for fourth and fifth row ... */}
      </div>
    </div>
  );
};

export default UploadFileTable;
