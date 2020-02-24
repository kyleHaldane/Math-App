import React from "react";

function Question(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>{props.questionText}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question;