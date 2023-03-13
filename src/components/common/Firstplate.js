import React from 'react'
import { Link } from "react-router-dom";

function Firstplate({ children }) {
  return (
    <>
      <div className="bodyContainer">
        <div className="leftContainer">
          <Link to="/">
            <div className="leftContainer02">
              <div className="leftContainer0202"></div>
            </div>
          </Link>
        </div>

        <div className="mainContainer">{children}</div>
      </div>
    </>
  );
}

export default Firstplate