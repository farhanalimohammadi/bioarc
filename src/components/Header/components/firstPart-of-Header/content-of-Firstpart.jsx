import React from "react";
import Avatar from "./contents-Avatar";
import InfoBox from "./contents-infoBox";
import ContentIcons from "./Contents-Icons";
const FirstPartContent = () => {

    return(
        <div className="firstPart_header_content">
            <Avatar/>
            <InfoBox/>
            <ContentIcons/>
            <span className="firstPart_header_content_language">En</span>
        </div>
    )
}

export default FirstPartContent