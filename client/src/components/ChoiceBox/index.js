import React from "react";
import Choice from "../Choice";

function ChoiceBox(props) {
  return(
  <div>
    <ol>
    <li>
    <Choice 
      option={props.choiceA}
      clicking={props.clicking}
      questionNumberState={props.questionNumberState}
      choices={props.choices}
      setChoices={props.setChoices}/>
    </li>
    <li>
    <Choice 
      option={props.choiceB}
      clicking={props.clicking}
      questionNumberState={props.questionNumberState}
      choices={props.choices}
      setChoices={props.setChoices}/>
    </li>
    <li>
    <Choice 
      option={props.choiceC}
      clicking={props.clicking}
      questionNumberState={props.questionNumberState}
      choices={props.choices}
      setChoices={props.setChoices}/>
    </li>
    <li>
    <Choice 
      option={props.choiceD}
      clicking={props.clicking}
      questionNumberState={props.questionNumberState}
      choices={props.choices}
      setChoices={props.setChoices}/>
    </li>
    </ol>
  </div>
  )
}

export default ChoiceBox;