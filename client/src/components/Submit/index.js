import React from "react";
import { Button } from "reactstrap";



function Submit(props){

    function storage(){
        for(let i = 0; i < props.choices.length; ++i){
            props.handleFormSubmit(props.choices[i], props.correctAnswers[i], props.ids[i])
        }
    }

    return(
        <div>
            <Button onClick ={storage} color="Submit">submit</Button>
        </div>
    )
}

export default Submit;