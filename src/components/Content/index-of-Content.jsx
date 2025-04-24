import React from "react";
import FirstPartContent from "./components/first-part/index-of-firstPart";
import SecondPartContent from "./components/second-part/index-of-secondPart";
import ThirdPart from "./components/third-part/index-of-thirdPart";

const Content = () => {
    return(
        <div className="content">
            <FirstPartContent/>
            <SecondPartContent/>
            <ThirdPart/>
        </div>
    )
}

export default Content