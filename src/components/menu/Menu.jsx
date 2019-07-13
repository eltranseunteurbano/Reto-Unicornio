import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter,faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons";

export default function Menu (props){
    return(
        <article className="Home__menu">
            <div className="Home__menu__logo">
                    <img src={process.env.PUBLIC_URL + "./img/unicorn.png"} alt="Logo"/>
            </div>
            <div className="Home__menu__items">
                <a href="https://www.instagram.com/eltranseunteurbano" target="_blank" without rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a>
                <a href="https://www.twitter.com/eltranseunteurb" target="_blank" without rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.linkedin.com/in/jaimedburbano/" target="_blank" without rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.behance.net/ELTRANSEUNTEURBANO" target="_blank" without rel="noopener noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
            </div>
         </article>
    )
}