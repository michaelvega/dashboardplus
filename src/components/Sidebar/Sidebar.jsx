import React, {useState} from "react";
import "./Sidebar.css"
import Logo from '../../imgs/assetslogo-removebg-black.png'
import {SidebarData} from "../../data/data";
import {UilSignOutAlt} from "@iconscout/react-unicons";

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return(
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="logo"/>
                <span>
                    <span>A</span>pps
                </span>
            </div>
            {/* menu*/}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return(
                        <div className={selected===index?"menuItem active":"menuItem"}
                        key = {index}
                        onClick={()=>setSelected(index)}>
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignOutAlt></UilSignOutAlt>
                </div>
            </div>
        </div>
    )
}

export default Sidebar