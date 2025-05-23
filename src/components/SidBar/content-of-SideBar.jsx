import React from "react";
import { useState } from "react";

const SideBarContent = () => {
    const [itemContent, setItemContent] = useState([
        {name: "داشبورد",/* link: "" */ isclick: false},
        {name: "تماس خروجی",/* link: "" */ isclick: true},
        {name: "افزودن نوبت",/* link: "" */ isclick: false},
        {name: "وظایف",/* link: "" */ isclick: false},
        {name: "بیماران",/* link: "" */ isclick: false},
        {name: "کارمندان",/* link: "" */ isclick: false},
        {name: "تاریخچه تماس‌ها",/* link: "" */ isclick: false},
    ]);
    
    const [activeItem, setActiveItem] = useState("تماس خروجی");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const contentArray = Array.isArray(itemContent) ? itemContent : [];


    return (
        <div className="sidebar_content">
            {contentArray.length === 0 ? (
                <p>هیچ آیتمی برای نمایش وجود ندارد.</p>
            ) : (
                contentArray.map(item => (
                    <span 
                        className={`sidebar_content_items sidebar_padding_items ${activeItem === item.name ? 'active' : ''}`} 
                        key={item.id || item.name}
                        onClick={() => handleItemClick(item.name)}
                        style={{ 
                            cursor: 'pointer',
                            transform: activeItem === item.name ? 'scale(1.05)' : 'scale(1.00)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {getIconForItem(item.name, activeItem === item.name)}
                        <p 
                            className="sidebar_content_items_text"
                            style={{ 
                                color: activeItem === item.name ? '#5178F5' : '#424242',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            {item.name}
                        </p>
                    </span>
                ))
            )}
        </div>
    );
};


function getIconForItem(name, isActive = false) {
    const color = isActive ? "#5178F5" : "#424242";
    switch(name) {
        case "تماس خروجی":
            return (
                <svg className="transition_scale" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z" fill={color}/>
                    <path d="M21.23 10.75C20.8 10.75 20.46 10.4 20.46 9.98C20.46 6.43 17.57 3.55 14.03 3.55C13.6 3.55 13.26 3.2 13.26 2.78C13.26 2.36 13.6 2 14.02 2C18.42 2 22 5.58 22 9.98C22 10.4 21.65 10.75 21.23 10.75Z" fill={color}/>
                    <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill={color}/>
                    <path d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z" fill={color}/>
                </svg>
            );
        default:
            return (
                <svg className="transition_scale" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96997 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.96997 12.7L7.96997 12.68C8.71997 12.68 9.55997 13.25 9.83997 13.95L10.98 16.83C11.24 17.48 11.65 17.48 11.91 16.83L14.2 11.02C14.42 10.46 14.83 10.44 15.11 10.97L16.15 12.94C16.46 13.53 17.26 14.01 17.92 14.01H21.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            );
    }
}

export default SideBarContent