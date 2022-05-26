import React from "react";
import service from "../services";
import WorkCard from "./WorkCard";

function Work() {
    return (
        <div className="workMain">
            <div className="works">
                <h1>HOW IT WORKS</h1>
                <p>Just follow 3 simple Steps to meet our Superheroes at your doorstep.</p>
            </div>

            <div className="row">
                <div className="workcard col-lg-4">
                    <WorkCard
                        img={service[0].imgWork}
                        heading={service[0].headingWork}
                        desc={service[0].descWork}
                    />
                </div>
                <div className="workcard col-lg-4">
                    <WorkCard
                        img={service[1].imgWork}
                        heading={service[1].headingWork}
                        desc={service[1].descWork}
                    />
                </div>
                <div className="workcard col-lg-4">
                    <WorkCard
                        img={service[2].imgWork}
                        heading={service[2].headingWork}
                        desc={service[2].descWork}
                    />
                </div>

            </div>

        </div>
    )
}

export default Work;