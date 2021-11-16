import React from "react";
import '../Header/header.css';
import myPicture from '../../assets/img/IMG-20210906-WA0046.jpg';


const Header = () => {
    return (
        <section className='header'>
            <header>
                <div className='photo'>
                    <img src={myPicture} alt='picture of bere'/>
                </div>
                <div className='title'>
                    <h1>
                        Berenice Reddig
                    </h1>
                    <h2>Web Developer</h2>
                </div>
            </header>
        </section>
    );
}

export default Header;