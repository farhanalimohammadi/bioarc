import React from "react";
import DoctorInfo from "./components/doctor-info";
import CallBox from "./components/call-box";
import InfoBox from "./components/infobox-of-call";
const SecondPartContent = () => {
    return(
        <div className="content_secondpart">
            <div className="content_secondpart_info">
                <DoctorInfo/>
                <button className="content_secondpart_button">
                    
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.75 13.7813H6.25C6.0375 13.7813 5.85938 13.706 5.71563 13.5554C5.57188 13.4048 5.5 13.2181 5.5 12.9955C5.5 12.7728 5.57188 12.5877 5.71563 12.4401C5.85938 12.2926 6.0375 12.2188 6.25 12.2188H11.75V6.48962C11.75 6.26827 11.8223 6.08272 11.9669 5.93298C12.1115 5.78324 12.2906 5.70837 12.5044 5.70837C12.7181 5.70837 12.8958 5.78324 13.0375 5.93298C13.1792 6.08272 13.25 6.26827 13.25 6.48962V12.2188H18.75C18.9625 12.2188 19.1406 12.2941 19.2844 12.4447C19.4281 12.5953 19.5 12.782 19.5 13.0046C19.5 13.2273 19.4281 13.4124 19.2844 13.5599C19.1406 13.7075 18.9625 13.7813 18.75 13.7813H13.25V19.5105C13.25 19.7318 13.1777 19.9174 13.0331 20.0671C12.8885 20.2168 12.7094 20.2917 12.4956 20.2917C12.2819 20.2917 12.1042 20.2168 11.9625 20.0671C11.8208 19.9174 11.75 19.7318 11.75 19.5105V13.7813Z" fill="white"/>
                    </svg>
                    <span className=""> نوبت جدید</span>
                </button>
            </div>
            <div className="content_secondpart_call">
                <CallBox/>
                <InfoBox/>
            </div>
        </div>
    )
}

export default SecondPartContent;