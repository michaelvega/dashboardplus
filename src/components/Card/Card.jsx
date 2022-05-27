import React, {useState} from "react";
import "./Card.css"
import {AnimateSharedLayout} from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";


const Card = (props) => {

    const[expanded, setExpanded] = useState(false)

    return (
        <AnimateSharedLayout>
            {
                expanded? (
                    "Expanded"
                ):
                    <CompactCard param = {props}></CompactCard>
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({param}) {
    const Png = param.png;
    return (
        <div className="CompactCard">
            <div className="radialBlur">
                Chart
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    )
}

export default Card