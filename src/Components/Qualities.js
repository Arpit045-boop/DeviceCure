import React from "react";
import service from "../services";
import QualityCard from "./QualityCard";
function Qualities() {
    return (
        <div className="qualityMain">
            <div className="qualities">
                <h3 >Repair your phone at doorstep</h3>
                <h1 >OUR QUALITIES</h1>
            </div>
            <div className="row">
                <div className="men col-lg-4">
                    <img id="men" src="men.png" />
                </div>
                <div className="px-5 py-3 my-5 col-lg-4">
                    <QualityCard
                        img={service[0].imgQul}
                        name={service[0].heading}
                        desc={service[0].desc} />
                    <QualityCard
                        img={service[1].imgQul}
                        name={service[1].heading}
                        desc={service[1].desc} />
                </div>
                <div className="px-5 py-3 my-5 col-lg-4">
                    <QualityCard
                        img={service[2].imgQul}
                        name={service[2].heading}
                        desc={service[2].desc} />
                    <QualityCard
                        img={service[3].imgQul}
                        name={service[3].heading}
                        desc={service[3].desc} />
                </div>

            </div>
        </div>
    )
}

export default Qualities;