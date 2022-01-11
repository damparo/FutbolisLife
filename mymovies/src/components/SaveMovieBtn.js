import React from "react";
import "../styles/SearchPage.css";

function SaveMovie(props) {
  return (
    <div className="row justify-content-center saverow">
      <button type="button" className="btn btn-light saveBtn"
     
      onClick={() => {
        
        props.saveClick()

      }}
      >
        Save
      </button>
    </div>
  );
}

export default SaveMovie;
