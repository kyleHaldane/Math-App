import React from "react";
import { Button } from "reactstrap";


function Choice(props){

  function arraySetting(){
    let array = props.choices;
    array[props.questionNumber.count] = props.option
    props.setChoices(array)
  }

  return(
  <div>
    <div className="container">
    <div className="row">
      <div className="col">
      <Button outline color="secondary"
        onClick={()=> {
            props.clicking()
            arraySetting()
        }}>
          {props.option}
      </Button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Choice;