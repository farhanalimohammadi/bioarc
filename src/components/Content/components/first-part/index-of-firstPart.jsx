import React, { useState, useEffect } from "react";
import moment from 'jalali-moment'
const FirstPartContent = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    // اینحا من از یه کتابخانه  ایرانی برای شمسی یه دست اوردن تاریخ استفاده کردم 
    const getPersianDate = () => {
        const now = moment(currentTime);
        now.locale('fa'); 
        const dayOfWeek = now.format('dddd'); 
        const day = now.format('jD'); 
        const month = now.format('jMMMM'); 
        
        return `${dayOfWeek} ${day} ${month}`;
    };

    const getIranTime = () => {
        const options = { timeZone: 'Asia/Tehran', hour12: false };
        return currentTime.toLocaleTimeString('fa-IR', options);
    };
    
    const patientInfo = {
        warnings: [
            "به بیمار نوبت درمانگاه قرنیه داده نشود",
        ],
        status: [
            " پرخاشگر ",

        ]
    };
    
    const renderListItems = (items) => {
        return items.map((item, index) => (
            <span key={index} className="patient-info-item">
                {item}
            </span>
        ));
    };
    
    return(
        <div className="content_firstpart">

            <div className="content_firstpart_profile">

                <h3 className="content_firstpart_profile_h3">پروفایل</h3>

                <div className="content_firstpart_profile_labels">

                    <span className="content_firstpart_profile_labels_text">
                        {getPersianDate()}
                    </span>

                    <span className="content_firstpart_profile_labels_text">
                        {getIranTime()}
                    </span>

                </div>

            </div>

            <div className="content_firstpart_label">

                <div className="content_firstpart_label_patient_boxes">
                    <span className="patient_warnings">
                        {renderListItems(patientInfo.warnings)}
                    </span>

                    <span className="patient_warnings">
                        {renderListItems(patientInfo.status)}
                    </span>
                </div>
                
                <button className="content_firstpart_label_labelButton">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z" stroke="#2F3E63" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.73474 12.2263C11.1155 12.2263 12.2347 11.107 12.2347 9.72632C12.2347 8.34561 11.1155 7.22632 9.73474 7.22632C8.35403 7.22632 7.23474 8.34561 7.23474 9.72632C7.23474 11.107 8.35403 12.2263 9.73474 12.2263Z" stroke="#2F3E63" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M13.2347 17.2263L17.2347 13.2263" stroke="#2F3E63" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="button_label">برچسب</span>
                </button>
            </div>


        </div>
    )
}

export default FirstPartContent