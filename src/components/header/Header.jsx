import React from 'react';
import './Header.scss';

export default function Header (props){
    return(
        <article className="Home__content__header" id="inicio">
            <div className="Home__content__header__nav">
                <a href="#inicio">Inicio</a>
                <a href="#aboutme">Sobre mí</a>
                <a href="#portfolio">Portafolio</a>
            </div>

            <div className="Home__content__header__titulo">
                <h1>Unicornio Web <br /> Profesional</h1>
            </div>

            <div className="Home__content__header__card">
                <img src='%PUBLIC_URL%/img/image.png' alt="Imagen"/>
            </div>
        </article>
    )
}