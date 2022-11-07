import React from 'react';
import './style.scss';
import './assets/js/main';
import {mainpp} from '../../themes/theme-1/assets/img';

function Theme1() {
    return ( 
        <div className="theme-1-body">
            <div className="entry">
                <div className="cnt">
                    <h1 className="name wg-text"><span>Hello I'm</span> Efe Işık</h1>
                    <div className="title wg-text"><span>the</span> frontend developer</div>
                    <div className="img" style={{backgroundImage: 'url('+mainpp+')'}}></div>
                </div>
            </div>
            <div className="about">
                <div className="exp">
                    <div className="g-title">about me</div>
                    <p className="wg-text">I'm a <span>Front-end</span> developer who loves his job. It's been 3 years that I'm doing this job. It's always about <span>learning</span> and <span>researching</span> for information</p>
                </div>
                <div className="social">
                    <div className="g-title right">social</div>
                    <div className="links">
                        <a href="javascript:;" className="link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="59.399" height="59.399" viewBox="0 0 59.399 59.399"> <path data-name="BG 1" d="M0,0H59.4V59.4H0Z" fill="none" opacity="0.58"/> <path d="M12.379,8.171v7.177h6.435c.495,0,.742.495.742.99l-.99,4.7c0,.247-.495.495-.742.495H12.379V39.6H4.954V21.784H.746A.656.656,0,0,1,0,21.041v-4.7A.656.656,0,0,1,.746,15.6H4.954V7.429A7.291,7.291,0,0,1,12.379,0h6.682A.656.656,0,0,1,19.8.746v5.94a.656.656,0,0,1-.742.742h-5.94a.656.656,0,0,0-.742.742Z" transform="translate(22.271 14.846)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/> <path d="M32.175,49.5H17.325C4.95,49.5,0,44.55,0,32.175V17.325C0,4.95,4.95,0,17.325,0h14.85C44.55,0,49.5,4.95,49.5,17.325v14.85C49.5,44.55,44.55,49.5,32.175,49.5Z" transform="translate(4.95 4.95)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <path d="M0,0H59.4V59.4H0Z" fill="none" opacity="0"/> </svg>
                        </a>
                        <a href="javascript:;" className="link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="59.399" height="59.399" viewBox="0 0 59.399 59.399"> <path d="M17.325,49.5h14.85C44.55,49.5,49.5,44.55,49.5,32.175V17.325C49.5,4.95,44.55,0,32.175,0H17.325C4.95,0,0,4.95,0,17.325v14.85C0,44.55,4.95,49.5,17.325,49.5Z" transform="translate(4.95 4.95)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <path d="M0,0H59.4V59.4H0Z" fill="none" opacity="0"/> <path d="M17.325,8.662A8.662,8.662,0,1,1,8.662,0a8.662,8.662,0,0,1,8.662,8.662Z" transform="translate(21.037 21.037)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/> <path d="M.636.5h.03" transform="translate(43.013 16.825)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </svg>
                        </a>
                        <a href="javascript:;" className="link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55.619" height="52.888" viewBox="0 0 55.619 52.888"> <g transform="translate(0.5 0.5)"> <path d="M26.386,8A16.386,16.386,0,0,1,42.771,24.386V43.5H31.847V24.386a5.462,5.462,0,1,0-10.924,0V43.5H10V24.386A16.386,16.386,0,0,1,26.386,8Z" transform="translate(11.847 8.386)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <rect width="10.924" height="32.771" transform="translate(0 19.117)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <ellipse cx="5.462" cy="5.462" rx="5.462" ry="5.462" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> </g> </svg>
                        </a>
                        <a href="javascript:;" className="link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="63.969" height="52.373" viewBox="0 0 63.969 52.373"> <path d="M62.969.029a31.2,31.2,0,0,1-8.987,4.379A12.823,12.823,0,0,0,31.485,13v2.862A30.511,30.511,0,0,1,5.724,2.892S-5.724,28.652,20.036,40.1A33.316,33.316,0,0,1,0,45.825c25.76,14.311,57.245,0,57.245-32.916a12.88,12.88,0,0,0-.229-2.376A22.1,22.1,0,0,0,62.969.029Z" transform="translate(0.5 0.513)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> </svg>
                        </a>
                        <a href="javascript:;" className="link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51.53" height="55.443" viewBox="0 0 51.53 55.443"> <path d="M18.1,46.614C5.172,50.493,5.172,40.149,0,38.856M36.2,54.371V44.364a8.714,8.714,0,0,0-2.431-6.749c8.119-.905,16.653-3.982,16.653-18.1A14.065,14.065,0,0,0,46.546,9.82a13.11,13.11,0,0,0-.235-9.75S43.261-.836,36.2,3.9a34.6,34.6,0,0,0-18.1,0C11.041-.836,7.99.069,7.99.069a13.11,13.11,0,0,0-.233,9.749,14.067,14.067,0,0,0-3.879,9.774c0,14.015,8.533,17.092,16.653,18.1A8.714,8.714,0,0,0,18.1,44.364V54.371" transform="translate(0.606 0.572)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Theme1;