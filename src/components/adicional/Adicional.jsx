import React from 'react';

export default function Adicional (props){
    return(
        <article className="Home__content__adicional">
                    <div className="Home__content__adicional__cards">
                        <div className="Home__content__adicional__cards__icon">
                            <img src="%PUBLIC_URL%/img/development.png" alt=""/>
                        </div>
                        <div className="Home__content__adicional__cards__text">
                            <h3>Desarrollo Web</h3>
                            <p>HTML + CSS + Responsive Design</p>
                        </div>
                    </div>
                    <div className="Home__content__adicional__cards">
                        <div className="Home__content__adicional__cards__icon">
                            <img src="%PUBLIC_URL%/img/design.png" alt=""/>
                        </div>
                        <div className="Home__content__adicional__cards__text">
                            <h3>Diseño Web</h3>
                            <p>UI/UX + Adobe XD / Figma + Zeplin</p>
                        </div>
                    </div>
                </article>
    )
}