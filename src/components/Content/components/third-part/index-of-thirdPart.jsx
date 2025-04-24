import React, { useState } from "react";

const ThirdPart = () => {
    const [activeTab, setActiveTab] = useState("تاریخچه نوبت‌های بیمار");
    const [appointmentStatuses, setAppointmentStatuses] = useState({
        1: "رزرو شده",
        2: "لغو شده",
        3: "جابجا شد",
        4: "برگزار شد"
    });
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    
    const handleCancelAppointment = (id) => {
        setAppointmentStatuses(prev => ({ ...prev, [id]: "لغو شده" }));
    };
    
    const handleChangeAppointment = (id) => {
        setAppointmentStatuses(prev => ({ ...prev, [id]: "جابجا شد" }));
    };
    
    const getStatusColor = (status) => {
        switch(status) {
            case "رزرو شده":
                return "var(--light-blue-3)";
            case "لغو شده":
                return "#DC3545";
            case "جابجا شد":
                return "#FF8C00";
            case "برگزار شد":
                return "#28A745";
            default:
                return "var(--light-blue-3)";
        }
    };
    
    const appointments = [
        { id: 1, doctor: "دکتر محمد هاشمی راد", specialty: "متخصص گلو", date: "۱۴۰۲/۰۸/۱۶" },
        { id: 2, doctor: "دکتر سارا احمدی", specialty: "متخصص قلب", date: "۱۴۰۲/۰۸/۲۰" },
        { id: 3, doctor: "دکتر علی رضایی", specialty: "متخصص اعصاب", date: "۱۴۰۲/۰۸/۲۵" },
        { id: 4, doctor: "دکتر مریم کاظمی", specialty: "متخصص پوست", date: "۱۴۰۲/۰۸/۳۰" }
    ];
    
    return(
        <div className="content_thirdpart">
            <div className="content_thirdpart_header">
                <span 
                    className={activeTab === "تاریخچه نوبت‌های بیمار" ? "content_thirdpart_header_titles_active" : "content_thirdpart_header_titles"}
                    onClick={() => handleTabClick("تاریخچه نوبت‌های بیمار")}
                >
                    تاریخچه نوبت‌های بیمار
                </span>
                <span 
                    className={activeTab === "تاریخچه تماس‌های بیمار" ? "content_thirdpart_header_titles_active" : "content_thirdpart_header_titles"}
                    onClick={() => handleTabClick("تاریخچه تماس‌های بیمار")}
                >
                    تاریخچه تماس‌های بیمار
                </span>
                <span 
                    className={activeTab === "اطلاعات تکمیلی بیمار" ? "content_thirdpart_header_titles_active" : "content_thirdpart_header_titles"}
                    onClick={() => handleTabClick("اطلاعات تکمیلی بیمار")}
                >
                    اطلاعات تکمیلی بیمار
                </span>
            </div>
            <div className="content_thirdpart_main">
                {appointments.map(appointment => (
                    <div key={appointment.id} className="content_thirdpart_main_boxes">
                        <div className="box_info">
                            <h3 className="box_info_title">{appointment.doctor}</h3>
                            <span className="box_info_content">{appointment.specialty}</span>
                        </div>
                        <div className="box_buttons">
                            <div className="buttons_conteiner">
                                <button 
                                    className="box_button_turns"
                                    onClick={() => handleCancelAppointment(appointment.id)}
                                >
                                    لغو نوبت
                                </button>
                                <button 
                                    className="box_button_turns"
                                    onClick={() => handleChangeAppointment(appointment.id)}
                                >
                                    تغییر نوبت
                                </button>
                                <span 
                                    className="box_button_status"
                                    style={{ backgroundColor: getStatusColor(appointmentStatuses[appointment.id]) }}
                                >
                                    {appointmentStatuses[appointment.id]}
                                </span>
                            </div>
                            <p className="box_date">{appointment.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ThirdPart;