import React from 'react';

export default function aboutme (props){
    return(
        <article className="Home__content__portfolio" id="portfolio">
                    <div className="Home__content__portfolio__titulo">
                        <h2>Proyectos</h2>
                    </div>
                    <div className="Home__content__portfolio__content">
                    <div className="Home__content__portfolio__content__proyecto">
                        <img src={process.env.PUBLIC_URL + './img/platzivideo.svg'} alt=""/>
                        <div className="Home__content__portfolio__content__proyecto__atras">
                            <h3>Platzi Video</h3>
                        </div>
                    </div>
                    <div className="Home__content__portfolio__content__proyecto" >
                    <img src={process.env.PUBLIC_URL + './img/platziconf.svg'} alt=""/>
                        <div className="Home__content__portfolio__content__proyecto__atras">
                            <h3>Platzi Conf</h3>
                        </div>
                    </div>
                </div>
                </article>
    )
}