import React from 'react';
import './HomeLayout.scss';

import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import Adicional from '../../components/adicional/Adicional';
import AboutMe from '../../components/aboutme/AboutMe';
import Portafolio from '../../components/portfolio/Portafolio';

export default function HomeLayout (props){
    return(
        <section className="Home">
            <Menu />
            <article className="Home__content">
                <Header />
                <Adicional />
                <AboutMe />
                <Portafolio />
            </article>
        </section>
    )
}