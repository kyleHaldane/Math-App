import React from "react";
import Navbar from "../components/Navbar/index";
import StartBtn from "../components/StartBtn/index"
import TestResults from "../components/TestResults/index"
import OverallTest from "../components/OverAllTest/index"

function Dashboard() {
    return(
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <StartBtn />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <TestResults />
                    </div>
                    <div className="col-6">
                        <OverallTest />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;