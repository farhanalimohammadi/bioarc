import React, { Fragment, useState } from "react";

const DoctorInfo = () => {
    const [info, setInfo] = useState({
        doctorName: "هدی نعمت",
        date: "1403/05/12",
        time: "11:45:00"
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempInfo, setTempInfo] = useState({ ...info });

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveChanges = () => {
        setInfo({ ...tempInfo });
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempInfo(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Fragment>
            <div className="content_secondpart_info_infobox">
                <span className="title_h4">اطلاعات نوبت:</span>
                    <span className="content_secondpart_info_infobox_texts">
                        <strong>نام پزشک:</strong> {info.doctorName}
                    </span>
                    <span className="content_secondpart_info_infobox_texts">
                        تاریخ نوبت: {info.date}_  {info.time}
                    </span>
                    <button className="content_secondpart_info_infobox_texts cursor_button" onClick={handleEditClick}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.83994 2.39994L3.36661 8.19327C3.15994 8.41327 2.95994 8.84661 2.91994 9.14661L2.67328 11.3066C2.58661 12.0866 3.14661 12.6199 3.91994 12.4866L6.06661 12.1199C6.36661 12.0666 6.78661 11.8466 6.99327 11.6199L12.4666 5.82661C13.4133 4.82661 13.8399 3.68661 12.3666 2.29327C10.8999 0.913274 9.78661 1.39994 8.83994 2.39994Z" stroke="#36459B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.92664 3.3667C8.2133 5.2067 9.70664 6.61337 11.56 6.80003" stroke="#36459B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 14.6666H14" stroke="#36459B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>ویرایش نوبت</span>
                    </button>
            </div>

            {/* مدال ویرایش اطلاعات */}
            {isModalOpen && (
                <div className="edit-modal-backdrop">
                    <div className="edit-modal">
                        <h3 className="edit-modal-title">ویرایش اطلاعات نوبت</h3>
                        <div className="edit-modal-field">
                            <label>نام دکتر:</label>
                            <input
                                type="text"
                                name="doctorName"
                                value={tempInfo.doctorName}
                                onChange={handleInputChange}
                                className="edit-modal-input"
                            />
                        </div>
                        <div className="edit-modal-field">
                            <label>تاریخ:</label>
                            <input
                                type="text"
                                name="date"
                                value={tempInfo.date}
                                onChange={handleInputChange}
                                className="edit-modal-input"
                            />
                        </div>
                        <div className="edit-modal-field">
                            <label>زمان:</label>
                            <input
                                type="text"
                                name="time"
                                value={tempInfo.time}
                                onChange={handleInputChange}
                                className="edit-modal-input"
                            />
                        </div>
                        <div className="edit-modal-buttons">
                            <button className="edit-modal-button cancel" onClick={handleCloseModal}>
                                لغو
                            </button>
                            <button className="edit-modal-button save" onClick={handleSaveChanges}>
                                ذخیره
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default DoctorInfo;