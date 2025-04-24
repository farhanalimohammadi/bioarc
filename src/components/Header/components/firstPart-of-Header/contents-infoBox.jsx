import React from "react";

const InfoBox = () => {
    const info = [
        {ask: "پلی کلینیک", title : "بیمارستان شریعتی " , /* content: [] برای تبی مختوای تبی که ازش پایین میاد */ },
        {ask: false, title : "روتومالوژی" , /*content: []*/},
        {ask: "از طرف", title: "محمود اکبریان" ,/* content:[] */}
    ]
    return(
        <div className="firstPart_header_content_infobox">
            {info.map((item) => (
                <span className="firstPart_header_content_infobox_span">
                    <span className="firstPart_header_content_infobox_span_text">
                        {item.ask ? item.ask : null }
                        {item.ask ? ":" : null }

                    </span>
                    <span className="firstPart_header_content_infobox_span_text">
                        {item.title}
                    </span>
                    
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.70665 4.43079L6.33207 4.43079L3.29332 4.43079C2.77332 4.43079 2.51332 5.05912 2.88165 5.42745L5.68749 8.23329C6.13707 8.68287 6.86832 8.68287 7.3179 8.23329L8.38498 7.1662L10.1237 5.42745C10.4867 5.05912 10.2267 4.43079 9.70665 4.43079Z" fill="#424242"/>
                    </svg>

                </span>
            ))}
        </div>
    )
}
export default InfoBox