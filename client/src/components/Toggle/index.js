import React from "react";
import { Button } from "reactstrap";

function Toggle(props){
    return(
        <div>
             <Button color="primary" onClick={props.prevQ}>Previous</Button>{' '}
             <Button color="primary" onClick={props.nextQ}>Next</Button>
        </div>
    )
}

export default Toggle;