import React from 'react';
import './home-showcase.scss';

function HomeShowcase({image}) {
    return (  
        <div className="showcase-item">
            <div className="img" style={image}></div>
        </div>
    );
}

export default HomeShowcase;