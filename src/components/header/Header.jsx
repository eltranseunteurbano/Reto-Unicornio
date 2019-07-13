import React from 'react';
    import './Header.scss';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            scrollPosition: window.pageYOffset,
            visible:true,
        }
    }

    onHandleScroll = () => {
        const header = document.getElementById('inicio').offsetHeight;
        var windowY = window.pageYOffset;
        var visible; 

        if(windowY >= header - 180){
            visible = true;
        }if(windowY <=150){
            visible = false;
        }


        console.log(windowY + ">=" + header + " : " + visible);
        
        this.setState({
            visible
        });
    }

    componentDidMount(){
        window.addEventListener("scroll", this.onHandleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.onHandleScroll);
    }

    render(){
        return(
            <article className="Home__content__header" id="inicio">
                <div className={!this.state.visible ? "Home__content__header__nav" : "Home__content__header__navHidden"}>
                    <h1>Unicornio Web Profesional</h1>
                    <div className={!this.state.visible ? "Home__content__header__nav__items" : "Home__content__header__navHidden__items"}> 
                        <a href="#inicio">Inicio</a>
                        <a href="#aboutme">Sobre mí</a>
                        <a href="#portfolio">Portafolio</a>
                    </div>
                </div>

                <div className="Home__content__header__titulo">
                    <h1>Unicornio Web <br /> Profesional</h1>
                </div>

                <div className="Home__content__header__card">
                    <img src={ process.env.PUBLIC_URL + './img/image.png'} alt="Imagen"/>
                </div>
            </article>
        )
    }
}