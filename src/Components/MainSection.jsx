import React from 'react'
import guest from "../assets/2.png"
import award from "../assets/1.png"
import pumpsImg from "../assets/3.png"

function MainSection() {
    return (
        <main >
            <div className="mid-portion">
                <div className="award-img-box">
                    <img src={award} alt="" />
                </div>
                <div className="details-achievement">
                    <h5>

                        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                    </h5>
                    <ul className="list-Of-achievements">
                        <li>
                            C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>

                            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                    <div className="guest-img-box">
                        <img src={guest} alt="" />
                    </div>
                    <p className="lower-info">Government of India has awarded the
                        <strong>
                            "National Energy Conservation Award 2018".
                        </strong>

                        Mr. G. Selvaraj, Joint Managing Director of
                        C.R.I. Group received the award from Smt. Sumitra
                        Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
                        Honorable Minister of State.</p>
                </div>

            </div>

            <p className="lower-info install">{"*"} INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <div className="lower-0f-main">
                <img src={pumpsImg} alt="" />
            </div>
            <div className="pump-info">
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </div>
            <div className="strip"></div>
            <div className="diff-segments">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>


            <div className="segments">
                <div className="segment-item">CHEMICALS & PROCESS</div>
                <div className="segment-item">POWER</div>
                <div className="segment-item">WATER & WASTE WATER</div>
                <div className="segment-item">OILS & GAS</div>
                <div className="segment-item">PHARMA SUGARS & DISTILLERIES</div>
                <div className="segment-item">PAPER & PULP</div>
                <div className="segment-item">MARINE & DEFENCE</div>
                <div className="segment-item">METAL & MINING</div>
                <div className="segment-item">FOOD & BEVERAGE</div>
                <div className="segment-item">PETROCHEMICAL & REFINERIES</div>
                <div className="segment-item">SOLAR</div>
                <div className="segment-item">BUILDING</div>
                <div className="segment-item">HVAC</div>
                <div className="segment-item">FIRE FIGHTING</div>
                <div className="segment-item">AGRICULTURE & RESIDENTIAL</div>
            </div>


        </main>
    )
}

export default MainSection
