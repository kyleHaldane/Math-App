import React from "react";
import { Button } from "reactstrap";
import API from "../../utils/API"


function storage(){
    for(let i = 0; i < props.choices; ++i){
        API.saveQuestions({})
    }
}

function Submit(props){
    return(
        <div>
            <Button color="success">submit</Button>
        </div>
    )
}

export default Submit;