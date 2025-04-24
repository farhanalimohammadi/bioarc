import React from "react";

const SecondPart = () => {

    const headerContent = [
        {name : "پنل من " , /* link : /../.. */}, 
        {name : "بیماران من" , /* link : /../.. */}, 
        {name : "درمان" , /* link : /../.. */}, 
        {name : "مالی" , /* link : /../.. */}, 
        {name : "مدیریت" , /* link : /../.. */}, 
    ]

    return(
        <div className="secondPart_header">
            <div className="secondPart_header_title">
                <h3 className="secondPart_header_title_h3">
                    سرویس‌ها
                </h3>
                
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96012 4.08997L5.84512 4.08997H3.04012C2.56012 4.08997 2.32012 4.66997 2.66012 5.00997L5.25012 7.59997C5.66512 8.01497 6.34012 8.01497 6.75512 7.59997L7.74012 6.61497L9.34512 5.00997C9.68012 4.66997 9.44012 4.08997 8.96012 4.08997Z" fill="#424242"/>
                </svg>

            </div>
            <div className="secondPart_header_content">
                {headerContent.map(item => (
                    <span className="secondPart_header_content_span">{item.name}</span>
                ))}
            </div>
        </div>
    )
}

export default SecondPart