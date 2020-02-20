import React from "react";
import LoginInfo from "../LoginInfo";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function LoginBox(){
    return(
        <div>
            <div className="container mt-5">
                <Row>
                <Col >
                    <Card body>
                    <CardTitle>Math-App 2020</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <LoginInfo />
                    <Button>Go somewhere</Button>
                    </Card>
                </Col>
                </Row>
            </div>
        </div>
    )
}

export default LoginBox;