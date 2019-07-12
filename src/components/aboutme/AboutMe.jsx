import React from 'react';

export default function     aboutme (props){
    return(
        <article className="Home__content__aboutme" id="aboutme">
        <div className="Home__content__aboutme__titulo">
            <h2>Sobre mí</h2>
        </div>
        <div className="Home__content__aboutme__content">
            <p>Aquí puedes escribir algo bien chido sobre tí, lo que te gusta y lo que no. Los lugares que quieres conecer o la comida que más disfrutas, incluso puedes hablar de tus mascotas.</p>
            <h6> - ¿Dónde quieres trabajar?</h6>
        </div>

        <div className="Home__content__aboutme__rocket">
            <img src={process.env.PUBLIC_URL + './img/rocket.png'} alt="Cohete"/>
        </div>
    </article>
    )
}