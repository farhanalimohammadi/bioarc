import React, { useState, useCallback, useRef } from "react";

const InfoBox = () => {
    const [info, setInfo] = useState({
        fullName: "فرحان علی محمدی",
        nationalCode: "۱۲۳۴۵۶۷۸۹۰",
        mobile: "۰۹۱۲۱۲۳۴۵۶۷",
        birthDate: "۱۲/۰۵/۱۳۶۵",
        gender: "مرد"
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempInfo, setTempInfo] = useState({ ...info });
    const [dateError, setDateError] = useState("");

    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);

    const toPersianDigits = useCallback((str) => {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return str.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
    }, []);

    const checkInsuranceValidity = useCallback((expiryDate) => {
        const [year, month, day] = expiryDate.split("/").map(Number);
        const expiry = new Date(year + 621, month - 1, day);
        const today = new Date();
        return expiry < today ? "منسوخ شده" : "استحقاق";
    }, []);

    const [appointmentInfo, setAppointmentInfo] = useState({
        callReason: "",
        note: ""
    });

    const callReasonOptions = [
        { value: "", label: "انتخاب علت تماس" },
        { value: "consultation", label: "مشاوره" },
        { value: "followup", label: "پیگیری" },
        { value: "emergency", label: "اورژانس" },
        { value: "other", label: "سایر" }
    ];

    const handleAppointmentChange = useCallback((e) => {
        const { name, value } = e.target;
        setAppointmentInfo((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSaveAppointment = useCallback(() => {
        if (appointmentInfo.callReason && appointmentInfo.note) {
            console.log("اطلاعات نوبت ذخیره شد:", appointmentInfo);
            setAppointmentInfo({
                callReason: "",
                note: ""
            });
        }
    }, [appointmentInfo]);

    const isSaveButtonActive = appointmentInfo.callReason && appointmentInfo.note;

    const handleEditClick = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setDateError("");
        setTempInfo({ ...info });
    }, [info]);

    const validateDate = useCallback((day, month, year) => {
        let error = "";
        const dayNum = parseInt(day);
        const monthNum = parseInt(month);
        const yearNum = parseInt(year);

        if (day.length !== 2 || dayNum < 1 || dayNum > 31) {
            error = "روز باید بین 01 تا 31 باشد.";
        } else if (month.length !== 2 || monthNum < 1 || monthNum > 12) {
            error = "ماه باید بین 01 تا 12 باشد.";
        } else if (year.length !== 4 || yearNum < 1300 || yearNum > 1403) {
            error = "سال باید بین 1300 تا 1403 باشد.";
        }

        return error;
    }, []);

    const handleSaveChanges = useCallback(() => {
        const [day, month, year] = tempInfo.birthDate.split("/");
        const error = validateDate(day, month, year);
        if (error) {
            setDateError(error);
            return;
        }
        setInfo({ ...tempInfo });
        setDateError("");
        setIsModalOpen(false);
    }, [tempInfo, validateDate]);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setTempInfo((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleDateChange = useCallback((e, field, nextRef, prevRef) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (field === "day" && value.length === 2 && nextRef) {
            nextRef.current.focus();
        } else if (field === "month" && value.length === 2 && nextRef) {
            nextRef.current.focus();
        } else if (field === "month" && value.length === 0 && prevRef) {
            prevRef.current.focus();
        } else if (field === "year" && value.length === 0 && prevRef) {
            prevRef.current.focus();
        }
        setTempInfo((prev) => {
            const [day, month, year] = prev.birthDate.split("/");
            const newDate = field === "day" ? `${value}/${month}/${year}`
                : field === "month" ? `${day}/${value}/${year}`
                : `${day}/${month}/${value}`;
            return { ...prev, birthDate: newDate };
        });
    }, []);

    const calculateAge = useCallback((birthDate) => {
        const [day, month, year] = birthDate.split("/").map(Number);
        const today = new Date();
        const birth = new Date(year + 621, month - 1, day);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }, []);

    const fields = [
        { key: "fullName", label: "نام و نام خانوادگی" },
        { key: "nationalCode", label: "کد ملی" },
        { key: "mobile", label: "شماره موبایل" },
        { key: "birthDate", label: "تاریخ تولد" },
        { key: "gender", label: "جنسیت" }
    ];

    const insuranceInfo = {
        insurance: "تامین اجتماعی",
        insuranceExpiry: "1410/04/13",
        supplementaryInsurance: "دانا"
    };

    return (
        <div className="content_secondpart_call_infobox">
            <div className="content_secondpart_call_infobox_info">
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">نام و نام خانوادگی:</span>
                    <span className="infobox_info_texts_value">{info.fullName}</span>
                </div>
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">کد ملی:</span>
                    <span className="infobox_info_texts_value">{info.nationalCode}</span>
                </div>
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">شماره موبایل:</span>
                    <span className="infobox_info_texts_value">{info.mobile}</span>
                </div>
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">تاریخ تولد (سن):</span>
                    <span className="infobox_info_texts_value">{toPersianDigits(info.birthDate)} ({toPersianDigits(calculateAge(info.birthDate).toString())} سال)</span>
                </div>
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">جنسیت:</span>
                    <span className="infobox_info_texts_value">{info.gender}</span>
                </div>
                <button className="infobox_info_edit_button" onClick={handleEditClick}>
                    ویرایش اطلاعات
                </button>
            </div>
            <div className="content_secondpart_call_infobox_info">
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">بیمه:</span>
                    <span className="infobox_info_texts_value">{insuranceInfo.insurance}</span>
                </div>
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">اعتبار بیمه:</span>
                    <span className="infobox_info_texts_value">
                        {toPersianDigits(insuranceInfo.insuranceExpiry)} 
                        <span className="infobox_green_texts_title">
                            {checkInsuranceValidity(insuranceInfo.insuranceExpiry)}
                        </span>
                    </span>
                </div>
                <div className="infobox_info_texts">
                    <span className="infobox_info_texts_title">بیمه تکمیلی:</span>
                    <span className="infobox_info_texts_value">{insuranceInfo.supplementaryInsurance}</span>
                </div>
            </div>
            <div className="content_secondpart_call_infobox_taking_turns">
                <div className="infobox_turns_texts">
                    <span className="infobox_green_texts_title" >نوبت برای شخصی دیگر</span>
                </div>
                <div className="edit-modal-field" style={{ marginTop: "10px" }}>
                    <label>علت تماس</label>
                    <select
                        name="callReason"
                        value={appointmentInfo.callReason}
                        onChange={handleAppointmentChange}
                        className="appointment-select"
                    >
                        {callReasonOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div className="edit-modal-field" style={{ marginTop: "10px" }}>
                    <label>یادداشت</label>
                    <input
                        type="text"
                        name="note"
                        value={appointmentInfo.note}
                        onChange={handleAppointmentChange}
                        className="appointment-input"
                        placeholder="یادداشت خود را وارد کنید"
                    />
                </div>
                <button
                    className="infobox_info_edit_button appointment-save-button"
                    onClick={handleSaveAppointment}
                    disabled={!isSaveButtonActive}
                    style={{
                        backgroundColor: isSaveButtonActive ? "var(--primary-blue)" : "var(--background-white)",
                        color: isSaveButtonActive ? "var(--text-white)" : "var(--text-gray-2)",
                        cursor: isSaveButtonActive ? "pointer" : "not-allowed",
                        marginTop: "15px"
                    }}
                >
                    ذخیره اطلاعات
                </button>
            </div>
            {isModalOpen && (
                <div className="edit-modal-backdrop">
                    <div className="edit-modal">
                        <h2 className="edit-modal-title">ویرایش اطلاعات</h2>
                        {dateError && <div className="date-error-message">{dateError}</div>}
                        <div className="edit-modal-inputs">
                            {fields.map((field) => (
                                <div key={field.key} className="edit-modal-field">
                                    <label>{field.label}</label>
                                    {field.key === "birthDate" ? (
                                        <div className="birthdate-inputs">
                                            <input
                                                type="text"
                                                placeholder="روز"
                                                value={tempInfo[field.key].split("/")[0]}
                                                onChange={(e) => handleDateChange(e, "day", monthRef, null)}
                                                ref={dayRef}
                                                maxLength="2"
                                            />
                                            <span>/</span>
                                            <input
                                                type="text"
                                                placeholder="ماه"
                                                value={tempInfo[field.key].split("/")[1]}
                                                onChange={(e) => handleDateChange(e, "month", yearRef, dayRef)}
                                                ref={monthRef}
                                                maxLength="2"
                                            />
                                            <span>/</span>
                                            <input
                                                type="text"
                                                placeholder="سال"
                                                value={tempInfo[field.key].split("/")[2]}
                                                onChange={(e) => handleDateChange(e, "year", null, monthRef)}
                                                ref={yearRef}
                                                maxLength="4"
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            type="text"
                                            name={field.key}
                                            value={tempInfo[field.key]}
                                            onChange={handleInputChange}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="edit-modal-buttons">
                            <button className="edit-modal-button save" onClick={handleSaveChanges}>
                                ذخیره تغییرات
                            </button>
                            <button className="edit-modal-button cancel" onClick={handleCloseModal}>
                                لغو
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoBox;