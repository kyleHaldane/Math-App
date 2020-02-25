import React from "react";
import Question from "../Question";
import ChoiceBox from "../ChoiceBox"
import Submit from "../Submit";

function Display(props){
    return(
        <div>
            <Question questionText={props.testQuestion.question}/>
            <ChoiceBox 
                choiceA={props.choiceA}
                choiceB={props.choiceB}
                choiceC={props.choiceC}
                choiceD={props.choiceD}
                clicking={props.handleAnswerClick}
                questionNumberState={props.questionNumberState}
                choices={props.choices}
                setChoices={props.setChoices}
                />
        </div>
    )
}

export default Display;