import React from "react";
import SideBarContent from "./content-of-SideBar";

const SidBar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar_empty_space"></div>
            <div className="sidebar_title sidebar_padding_items">
                <h4 className="title_h4">منوی اصلی :</h4>
            </div>
            <SideBarContent/>
        </div>
    )
}
export default SidBar