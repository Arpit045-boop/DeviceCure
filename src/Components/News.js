import React from "react";

function News() {
    return (
        <div className="newsMain">
            <div className="newsHeading">
                <h4>Latest News</h4>
                <h1>See All Our Updated and Latest News</h1>
            </div>
            
            <div className="row">
                <div className="col-lg-4">
                    <div className="newsDiv">
                        <h3>28</h3>
                        <p >Sep,2021</p>
                        <p>By Sarah O'connor</p>
                        <h5>Realme GT 2 Pro India Launch This Month Hinted.</h5>
                        <p>Read More -> </p>
                        
                    </div>
                    
                </div>
                <div className="col-lg-4">
                    <div id="newsSecond" className="newsDiv">
                        <h3>28 </h3><p>Sep,2021</p>
                        <p>By Sarah O'connor</p>
                        <h5>Realme GT 2 Pro India Launch This Month Hinted.</h5>
                        <p>Read More -> </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="newsDiv">
                        <h3>28 </h3><p>Sep,2021</p>
                        <p>By Sarah O'connor</p>
                        <h5>Realme GT 2 Pro India Launch This Month Hinted.</h5>
                        <p>Read More -> </p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default News;