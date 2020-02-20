import React from "react";
import Navbar from "../components/Navbar/index";
import StartBtn from "../components/StartBtn/index"
import TestResults from "../components/TestResults/index"
import OverallTest from "../components/OverAllTest/index"

function Dashboard() {
    return(
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <StartBtn />
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <TestResults />
                    </div>
                    <div class="col-6">
                        <OverallTest />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;