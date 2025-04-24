import React from "react";
import Header from "../Header/index-of-Header"
import SidBar from "../SidBar/index-of-SidBar";
import Content from "../Content/index-of-Content";

const Bioark = () => {

    return(
        <div className="Conteiner">
            <Header/>
            <main>
                <SidBar/>
                <Content/>
            </main>
        </div>
    )
}

export default Bioark