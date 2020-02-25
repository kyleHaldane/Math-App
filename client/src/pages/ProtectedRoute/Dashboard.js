import React from "react";
import StartBtn from "../../components/StartBtn/index"
import TestResults from "../../components/TestResults/index"
import OverAllTest from "../../components/OverAllTest/index"
import "./Dashboard.css"

function Dashboard() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 startBtn">
                        <StartBtn />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <TestResults />
                    </div>
                    <div className="col-6">
                        <OverAllTest />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;