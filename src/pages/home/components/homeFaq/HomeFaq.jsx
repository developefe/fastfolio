import React from 'react';
import './home-faq.scss';


function HomeFaq({title, img, exp}) {
    return (  
        <div className="faq-item">
            <div className="cnt">
                <div className="title">
                    {title}
                    {img != "" ? <img src={img}/> : ''}
                </div>
                <div className="exp">{exp}</div>
            </div>
        </div>
        
    );
}

export default HomeFaq;